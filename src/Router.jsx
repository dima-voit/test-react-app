import React from 'react';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Education from './pages/Education/Education';
import { Routes, Route } from 'react-router-dom';
import './index.scss';



const Profile = () => {
  return (
    <div className="profile">
      <Routes>
        <Route path="/" element= {<About/>} exact={true}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </div>
  )
}

export default Profile
