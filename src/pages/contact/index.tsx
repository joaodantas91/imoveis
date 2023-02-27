import Container from '@/components/Container';
import useCreateContact from '@/hooks/contact';
import type { Contact } from '@/types/contact';
import React, { Reducer, useReducer, useState } from 'react';
import styles from './styles.module.scss';

function validateData(data: Contact) {
  return true
}

function Contact() {
  const formInitialValues: Contact = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }
  const [formData, setFormData] = useState(formInitialValues);
  const createContact = useCreateContact();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateData(formData)) {
      const response = await createContact.mutateAsync(formData);
    }

  }

  return (
    <Container>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input
            required={true}
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              name: e.target.value
            }))} />
        </label>
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            required={true}
            value={formData.email}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              email: e.target.value
            }))}
          />
        </label>
        <label>
          <span>Telefone</span>
          <input
            type="tel"
            name="phone"
            required={true}
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              phone: e.target.value
            }))}
          />
        </label>
        <label>
          <span>Mensagem</span>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              message: e.target.value
            }))}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </Container>
  )

}

export default Contact;