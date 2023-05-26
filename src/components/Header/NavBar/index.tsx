import Link from "next/link";
import { Button } from "@/components/Button";

type NavBarProps = {
  isScrolled: boolean;
}

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

function RenderNavItems () {
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

function NavBar ({ isScrolled }: NavBarProps) {
  return (
    <nav>
      <ul>
        <RenderNavItems />
      </ul>
    </nav>
  );
}

export default NavBar;