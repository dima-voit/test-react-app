import React from 'react';
import Navbar from './Navbar';
import About from '../profile/about/About';
import Contacts from '../profile/contacts/Contacts';
import Education from '../profile/education/Education';
import './aside.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Aside = () => {
  return (
    
      <aside className="sidebar">
        <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/about" element= {<About/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
        </BrowserRouter>
      </aside>
    
  )
}

export default Aside
