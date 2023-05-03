import Link from "next/link";
import { ReactNode } from "react";
import styles from './card.module.scss'

type CardProps = {
  href: string;
  children: ReactNode;
}

export function Card({ href, children }: CardProps) {
  return (
    <Link className={styles.card} href={href}>{children}</Link>
  );
}