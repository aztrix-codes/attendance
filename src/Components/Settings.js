import React, { useContext } from  "react";
import { ThemeContext } from "../App";

function Settings({setTheme}) {

  const theme = useContext(ThemeContext);


  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="Settings" style={{ color: theme === 'dark' ? 'white' : 'black' , flex: 11}}>
      <h1 className="setting-name">Settings</h1>
      <div className="theme">
        <h1>Dark Theme</h1>
        <div className="theme-toggle-btn">
          <input
            type="checkbox"
            id="themeToggle"
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
          <label htmlFor="themeToggle" />
        </div>
      </div>
    </div>
  );
}

export default Settings;
