import React from 'react';
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
      <button className='btn' onClick={handLight}>Light</button>
      <button className='btn' onClick={handDark}>Dark</button>
    </header>
  )
}

export default Header;
