import Container from '@/components/Container';
import useCreateContact from '@/hooks/contact';
import type { Contact } from '@/types/contact';
import React, { Reducer, useReducer, useState } from 'react';
import styles from './styles.module.scss';

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
    const response = await createContact.mutateAsync(formData);
    console.log(response);
  }

  return (
    <Container>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            name: e.target.value
          }))} />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            email: e.target.value
          }))}
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            phone: e.target.value
          }))}
        />
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            message: e.target.value
          }))}
        />
        <button type="submit">Enviar</button>
      </form>
    </Container>
  )

}

export default Contact;