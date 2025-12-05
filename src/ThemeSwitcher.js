import React from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
  return (
    <button className="theme-switcher" onClick={toggleTheme} aria-label={label}>
      <span aria-hidden="true">
        {theme === 'dark' ? '☀️' : '🌙'}
      </span>
    </button>
  );
};

export default ThemeSwitcher;