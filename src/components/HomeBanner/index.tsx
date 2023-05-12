import { SearchBar } from "./SearchBar";
import styles from './HomeBanner.module.scss';
import { useLayoutEffect } from "react";

export function HomeBanner() {
  useLayoutEffect(() => console.log(window.screen.availWidth, window.screen.availHeight), [])
  return (
    <div className={styles.HomeBanner}>
      <h1>
        Os melhores imóveis para comprar <br />
        e alugar em Belém e Região Metropolitana
      </h1>
      <p>
        Encontre seu imóvel dos sonhos! Com diversas opções de qualidade, eu ajudo você a encontrar o lar perfeito. <br />
        Entre em contato agora mesmo e comece a realizar seu sonho de morar no lugar ideal!
      </p>
      <SearchBar />
    </div>
  );
}