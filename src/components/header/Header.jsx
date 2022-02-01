import React from 'react';
import Navbar from '../aside/Navbar';
import { useTheme } from '../../hooks/use-theme';
import styles from './header.module.scss';

const Header = () => {
  const { setTheme } = useTheme();
  const btnLight = () => {
    setTheme('light')
  }
  const btnDark = () => {
    setTheme('dark')
  }
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.btn__wrap}>
        <button className={styles.btn} onClick={btnLight}>Light</button>
        <button className={styles.btn} onClick={btnDark}>Dark</button>
      </div>
    </header>
  )
}

export default Header;
