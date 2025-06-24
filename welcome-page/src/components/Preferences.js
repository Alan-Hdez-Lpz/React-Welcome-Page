import React, { useState } from 'react';
import Button from './Button';

function Preferences() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const themeClass = darkMode ? 'dark-theme' : 'light-theme';

  return (
    <div className={`preferences ${themeClass}`}>
      <h4>Current Theme: {darkMode ? 'Dark' : 'Light'}</h4>
      <Button
        text={`Switch to ${darkMode ? 'Light' : 'Dark'} Mode`}
        onClick={toggleTheme}
        style={{ padding: '10px 20px', marginTop: '10px' }}
      />
    </div>
  );
}

export default Preferences;
