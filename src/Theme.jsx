import React, { useState } from 'react';
import './Theme.css';

const ToggleButton = ({ onClick, isDarkMode }) => {
  return (
    <button onClick={onClick} className="btn">
      {isDarkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-toggle2-on" viewBox="0 0 16 16">
          <path d="M7 5H3a3 3 0 0 0 0 6h4a5 5 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416q.235-.537.584-1" />
          <path d="M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-toggle2-off" viewBox="0 0 16 16">
          <path d="M9 11c.628-.836 1-1.874 1-3a4.98 4.98 0 0 0-1-3h4a3 3 0 1 1 0 6z" />
          <path d="M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10" />
        </svg>
      )}
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <ToggleButton onClick={toggleTheme} isDarkMode={theme === 'dark'} />
  );
};

export default ThemeToggle;