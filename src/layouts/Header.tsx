import styles from '@/styles/layout/header.module.scss';
import Logo from '@/components/Logo';

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <Logo />
      </div>
    </header>
  )
}

export default Header;
