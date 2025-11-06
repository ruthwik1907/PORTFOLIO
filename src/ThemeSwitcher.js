import React from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeSwitcher;