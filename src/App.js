import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Parent from './components/Parent';
import Header from './components/Header';
import Switch from 'react-switch';

function App() {
  const [ darkMode, setDarkMode ] = useState(getInitialMode);

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode))
  }, [darkMode])

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = getPrefColorScheme();
    if(isReturningUser)
      return savedMode;
    else if(userPrefersDark)
      return true;
    else
      return false;
  }

  function getPrefColorScheme() {
    if(!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div className="toggle-container">
          {/* <button onClick={() => setDarkMode(prevMode => !prevMode)}>Toggle mode</button> */}
          <span className="toggle">
            <p>Check for dark/light mode</p>
            <Switch 
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              className="checkbox"
            />
            <p>This switch is <b>{darkMode ? "Off" : "On"}</b></p>
          </span>
        </div>
      </nav>
      <main>
        <h1>{darkMode ? "Dark mode" : "Light mode"}</h1>
        <h2>Toggle the switch for some magic</h2>
      </main>
      <Header />
      <Parent mode={darkMode} />
    </div>
  );
}

export default App;
