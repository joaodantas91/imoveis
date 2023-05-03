import { SearchBar } from "./SearchBar";
import styles from './HomeBanner.module.scss';

export function HomeBanner() {
  return (
    <div className={styles.HomeBanner}>
      <h1>
        Os melhores imóveis <br />
        para comprar e alugar <br />
        em Belém e Região Metropolitana
      </h1>
      <p>
        In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis <br />
        sapien nunc, commodo et, interdum suscipit, sollicitudin.
      </p>
      <SearchBar />
    </div>
  );
}