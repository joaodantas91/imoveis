import Container from '@/components/Container';
import Image from 'next/image';
import NavBar from './NavBar';
import styles from './header.module.scss';
import logo from "public/img/logo/logo.svg"
import logoWhite from "public/img/logo/logo-white.svg"
import Link from 'next/link';
import { Button } from '../Button';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';

type HeaderProps = {
  isHomePage: boolean;
}

export function Header ({ isHomePage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll () {
      setIsScrolled(window.scrollY > 127);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`
      ${styles.header}
      ${isHomePage ? styles.transparent : ''} 
      ${isScrolled ? styles.isScrolled : ''}
    `}>
      <Container className={styles.headerContainer}>
        <Link href="/" >
          <Image src={isHomePage ? logoWhite : logo} alt="" className={styles.logo} />
          <Logo isHomePage={isHomePage} isScrolled={isScrolled} />
        </Link>
        <NavBar isScrolled={isScrolled} />
        <Button variant={isScrolled ? 'primary-grey' : 'primary'}>Entre em contato</Button>
      </Container>
    </header >
  );
}