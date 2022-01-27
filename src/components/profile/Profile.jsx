import React from 'react';
import About from './about/About';
import Contacts from './contacts/Contacts';
import Education from './education/Education';
import './profile.css';



const Profile = () => {
  return (
    <div className="profile">
      <About />
      <Contacts />
      <Education />
    </div>
  )
}

export default Profile
