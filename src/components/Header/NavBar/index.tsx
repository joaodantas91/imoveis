import Link from "next/link";
import { Button } from "@/components/Button";
import styles from './navbar.module.scss';

const navItems = [
  {
    label: "Sobre mim",
    href: "/sobre"
  },
  {
    label: "Serviços",
    href: "/servicos"
  },
  {
    label: "Contato",
    href: "/contato"
  }
]

function RenderNavItems() {
  return (
    <>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </>
  );
}

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <RenderNavItems />
      </ul>
    </nav>
  );
}

export default NavBar;