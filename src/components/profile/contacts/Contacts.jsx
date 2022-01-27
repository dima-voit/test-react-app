import React from "react";

import './contacts.css';

const Contacts = () => {
  return (
    <div className="contacts">
      <ul className="contact__list">
        <li className="contact__list-item">
            <img className="contact__list-icon" src="icon/marker.svg" alt=""/>
            Ukraine, Kyiv
        </li>
        <li className="contact__list-item">
            <img className="contact__list-icon" src="icon/github.svg" alt=""/>
            <a className="contact__link" href="https://github.com/dima-voit" target="_blank">GitHub: dima-voit</a>
        </li>
        <li className="contact__list-item">
            <img className="contact__list-icon" src="icon/linkedin.svg" alt=""/>
            <a className="contact__link" href="https://www.linkedin.com/in/dmytro-voit" target="_blank">Linkedin: dmytro-voit</a>
        </li>
      </ul>
    </div>
  )
}

export default Contacts