import React from 'react';
import About from './about/About';
import Contacts from './contacts/Contacts';
import Education from './education/Education';
import { Routes, Route } from 'react-router-dom';
import './profile.css';



const Profile = () => {
  return (
    <div className="profile">
      <Routes>
        <Route path="/about" element= {<About/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </div>
  )
}

export default Profile
