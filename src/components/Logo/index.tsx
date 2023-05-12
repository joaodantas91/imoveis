import LogoSmall from '@/public/img/logo/logo-small.svg'
import LogoText from '@/public/img/logo/logo-text.svg'
import styles from './Logo.module.scss'

type LogoProps = {
  isScrolled: boolean;
  isHomePage: boolean;
}

export function Logo({ isScrolled, isHomePage }: LogoProps) {
  return (
    <div className={`${styles["logo-wrapper"]} ${isScrolled ? styles.isScrolled : ''}`}>
      <LogoSmall />
      <LogoText className={styles["logo-text"]} />
    </div>
  )
}