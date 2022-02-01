import React from "react";
import ContactItem from "./ContactItem";

import './contacts.css';

const Contacts = () => {

  const contactsData = [
    {
      country: 'Ukraine',
      city: 'Kyiv',
      mail: 'dmytro.vojt@gmail.com',
      githubLink: 'https://github.com/dima-voit',
      githubName: 'dima-voit',
      linkedinLink: 'https://www.linkedin.com/in/dmytro-voit',
      linkedinName: 'dmytro-voit',
    }
  ]

  return (
    <div className="contacts">
      {contactsData.map((contact) => (
        <ContactItem 
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
