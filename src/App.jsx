import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import ThemedBox from './ThemedBox';
import ThemeToggle from './ThemeToggle';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <h1>🎨 Theme Switcher</h1>
        <ThemeToggle />
        <ThemedBox />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
