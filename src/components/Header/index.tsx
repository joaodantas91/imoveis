import Container from '@/components/Container';
import Image from 'next/image';
import NavBar from '../NavBar';
import styles from './index.module.scss';
import logo from "public/img/logo/logo.svg"
import Link from 'next/link';

export function Header() {
  return (
    <header>
      <Container className={styles.headerContainer}>
        <Link href="/properties" >
          <Image src={logo} alt="" className={styles.logo}/>
        </Link>
        <NavBar />
      </Container>
    </header>
  );
}