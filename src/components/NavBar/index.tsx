import Link from "next/link";

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
    <nav>
      <ul>
        <RenderNavItems />
      </ul>
    </nav>
  );
}

export default NavBar;