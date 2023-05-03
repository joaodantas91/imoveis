import { Button } from '@/components/Button';
import styles from './SearchBar.module.scss';

export function SearchBar() {
  return (
    <div className={styles.SearchBar}>
      <select name="" id=""></select>
      <select name="" id=""></select>
      <input type="text" name="" id="" placeholder='Digite condomínio, região, bairro ou cidade' />
      <Button>Buscar Imóvel</Button >
    </div>
  );
}