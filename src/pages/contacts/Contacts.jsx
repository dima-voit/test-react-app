import React from "react";
import ContactItem from "./ContactItem";

import styles from './contacts.module.scss';

const contactsData = [
  {
    id: 1,
    country: 'Ukraine',
    city: 'Kyiv',
    mail: 'dmytro.vojt@gmail.com',
    githubLink: 'https://github.com/dima-voit',
    githubName: 'dima-voit',
    linkedinLink: 'https://www.linkedin.com/in/dmytro-voit',
    linkedinName: 'dmytro-voit',
  }
]

const Contacts = () => {

  return (
    <div className={styles.contacts}>
      {contactsData.map((contact) => (
        <ContactItem 
        key={contact.id}
        country={contact.country} 
        city={contact.city} 
        mail={contact.mail}
        githubLink={contact.githubLink}
        githubName={contact.githubName}
        linkedinLink={contact.linkedinLink}
        linkedinName={contact.linkedinName} 
      />
      ))}
    </div>
  )
}

export default Contacts
