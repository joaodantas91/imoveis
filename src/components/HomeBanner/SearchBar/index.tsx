import { Button } from '@/components/Button';
import { useContext, useState } from 'react';
import styles from './SearchBar.module.scss';
import Fuse from 'fuse.js';
import FlexSearchContext from '@/context/FlexSearchContext';
import localDB from '@/public/db/properties';
import { useRouter } from 'next/router';
import { Field, Form, Formik } from 'formik';
import { Properties } from '@/types/properties';

const options = {
  keys: ['title', 'description', 'type', 'transactionType'],
  includeScore: true,
  threshold: 0.3,
};

const fuse = new Fuse(localDB, options);

export function SearchBar() {

  const router = useRouter();
  const [results, setResults] = useState<Fuse.FuseResult<Properties>[]>([]);

  const handleSubmit = (values: { searchTerm: string }) => {
    if (values.searchTerm.length === 0) return;
    const searchResults = fuse.search(values.searchTerm);
    // setResults(searchResults);
    console.log(searchResults)
    router.push({
      pathname: '/search-results',
      query: { properties: JSON.stringify(searchResults.map(result => result.item.id)) },
    });
  };

  return (
    <Formik initialValues={{ searchTerm: '' }} onSubmit={handleSubmit}>
      <Form>
        <div className={styles.SearchBar}>

          <div className={styles["input-wrapper"]}>
            <Field name="searchTerm" type="text" placeholder='Digite condomínio, região, bairro ou cidade' className={styles.input} />
          </div>
          {/* <select name="" id=""></select>
          <select name="" id=""></select>
          <input type="text" name="" id="" placeholder='Digite condomínio, região, bairro ou cidade' /> */}
          <Button type='submit'>Buscar Imóvel</Button >
        </div>
      </Form>
    </Formik>
  );
}