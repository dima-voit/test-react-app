import React from "react";
import { NavLink } from "react-router-dom";
import './aside.css';

const Navbar = () => {
  return (
    <ul className="nav">
      <li className="nav__item">
        <NavLink to="/">
          About me
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/education">
          Education
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/contacts">
          Contacts
        </NavLink>
      </li>
    </ul>
  )
}

export default Navbar
