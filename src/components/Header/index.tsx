import styles from '@/styles/components/container.scss';
import Container from '@/components/Container';
import Image from 'next/image';
import NavBar from '../NavBar';

export function Header() {
  return (
    <header>
      <Container >

        <NavBar />
      </Container>
    </header>
  )
}