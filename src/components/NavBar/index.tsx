import Link from "next/link";
import styles from './navbar.module.scss';

const navItems = [{
  label: "Início",
  href: "/",
  id: "1"
}]

function RenderNavItems() {
  return (
    <>
      {navItems.map((item) => (
        <li key={item.id}>
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