import React from 'react';
import Navbar from '../aside/Navbar';
import { useTheme } from '../../hooks/use-theme';
import './header.css';

const Header = () => {
  const { theme, setTheme } = useTheme()
  const handLight = () => {
    setTheme('light')
  }
  const handDark = () => {
    setTheme('dark')
  }
  return (
    <header className="header">
      <Navbar />
      <div className="btn__wrap">
        <button className='btn' onClick={handLight}>Light</button>
        <button className='btn' onClick={handDark}>Dark</button>
      </div>
    </header>
  )
}

export default Header;
