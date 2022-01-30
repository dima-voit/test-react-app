import React from "react";

import './contacts.css';

const contactsInfo = {
  place: 'Ukraine, Kyiv',
  mail: 'dmytro.vojt@gmail.com',
  phone: '+380 (63) 049-33-04',
  github: 'dima-voit',
  linkedin: 'dmytro-voit',
}

const Contacts = () => {
  return (
    <div className="contacts">
      <ul className="contact__list">
        <li className="contact__list-item">
            Ukraine, Kyiv
        </li>
        <li class="contact__list-item">
          <a class="contact__link" href="mailto:dmytro.vojt@gmail.com">E-mail: dmytro.vojt@gmail.com</a>
        </li>
        <li className="contact__list-item">
            <a className="contact__link" href="https://github.com/dima-voit" target="_blank">GitHub: dima-voit</a>
        </li>
        <li className="contact__list-item">
            <a className="contact__link" href="https://www.linkedin.com/in/dmytro-voit" target="_blank">Linkedin: dmytro-voit</a>
        </li>
      </ul>
    </div>
  )
}

export default Contacts
