import { useState, useEffect } from "react";
import DarkTheme from "./DarkTheme";

function ThemeSwitch() {
  useEffect(() => {
    const value = localStorage.getItem('darkMode');
    const mode = value && JSON.parse(value);
    setDarkMode(mode);
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  console.log('[ThemeSwitch] render', darkMode);
  const text = darkMode ? 'Light Mode' : 'Dark Mode';

  return (
    <>
      <button onClick={handleClick}>{ text }</button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
        }
      `}</style>
      {darkMode && <DarkTheme />}
    </>
  )
};

export default ThemeSwitch;
