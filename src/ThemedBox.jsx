import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedBox() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`box ${theme}`}>
      <p>This box changes with the theme!</p>
    </div>
  );
}

export default ThemedBox;
