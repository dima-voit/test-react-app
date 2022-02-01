import React from "react";
import './contacts.css';

const ContactItem = (props) => {
  return (
    <div className="contacts">
      <ul className="contact__list">
        <li className="contact__list_item">
            {props.country}, {props.city}
        </li>
        <li class="contact__list_item">
          <a className="contact__link" href={"mailto:" + props.mail}>E-mail: {props.mail}</a>
        </li>
        <li className="contact__list_item">
            <a className="contact__link" href={props.githubLink} target="_blank">GitHub: {props.githubName}</a>
        </li>
        <li className="contact__list_item">
            <a className="contact__link" href={props.linkedinLink} target="_blank">Linkedin: {props.linkedinName}</a>
        </li>
      </ul>
    </div>
  )
}

export default ContactItem