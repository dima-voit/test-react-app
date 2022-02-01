import React from "react";
import { NavLink } from "react-router-dom";
import styles from './aside.module.scss';

const Navbar = () => {
  return (
    <ul className={styles.nav}>
      <li className={styles.nav__item}>
        <NavLink to="/">
          About me
        </NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink to="/education">
          Education
        </NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink to="/contacts">
          Contacts
        </NavLink>
      </li>
    </ul>
  )
}

export default Navbar
