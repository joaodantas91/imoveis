import Container from '@/components/Container';
import Image from 'next/image';
import NavBar from '../NavBar';
import styles from './index.module.scss';
import logo from "public/img/logo/logo.svg"

export function Header() {
  return (
    <header>
      <Container className={styles.headerContainer}>
        <Image src={logo} alt="" />
        <NavBar />
      </Container>
    </header>
  );
}