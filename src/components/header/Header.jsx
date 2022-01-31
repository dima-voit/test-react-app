import React from 'react';
import Navbar from '../aside/Navbar';
import { useTheme } from '../../hooks/use-theme';
import './header.css';

const Header = () => {
  const { theme, setTheme } = useTheme()
  const btnLight = () => {
    setTheme('light')
  }
  const btnDark = () => {
    setTheme('dark')
  }
  return (
    <header className="header">
      <Navbar />
      <div className="btn__wrap">
        <button className='btn' onClick={btnLight}>Light</button>
        <button className='btn' onClick={btnDark}>Dark</button>
      </div>
    </header>
  )
}

export default Header;
