import React from "react";
import styles from './contacts.module.scss';

const ContactItem = (props) => {
  return (
    <div className={styles.contacts}>
      <ul className={styles.contact__list}>
        <li className={styles.contact__list_item}>
            {props.country}, {props.city}
        </li>
        <li className={styles.contact__list_item}>
          <a className={styles.contact__link} href={"mailto:" + props.mail}>E-mail: {props.mail}</a>
        </li>
        <li className={styles.contact__list_item}>
            <a className={styles.contact__link} href={props.githubLink} target="_blank">GitHub: {props.githubName}</a>
        </li>
        <li className={styles.contact__list_item}>
            <a className={styles.contact__link} href={props.linkedinLink} target="_blank">Linkedin: {props.linkedinName}</a>
        </li>
      </ul>
    </div>
  )
}

export default ContactItem