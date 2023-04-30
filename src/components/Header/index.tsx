import Container from '@/components/Container';
import Image from 'next/image';
import NavBar from './NavBar';
import styles from './header.module.scss';
import logo from "public/img/logo/logo.svg"
import Link from 'next/link';
import { Button } from '../Button';

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <Link href="/properties" >
          <Image src={logo} alt="" className={styles.logo}/>
        </Link>
        <NavBar />
        <Button>Entre em contato</Button>
      </Container>
    </header>
  );
}