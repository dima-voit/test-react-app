import React from 'react';
import About from './about/About';
import Contacts from './contacts/Contacts';
import Education from './education/Education';
import { Routes, Route } from 'react-router-dom';
import styles from './profile.module.scss';



const Profile = () => {
  return (
    <div className={styles.profile}>
      <Routes>
        <Route path="/" element= {<About/>} exact={true}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </div>
  )
}

export default Profile
