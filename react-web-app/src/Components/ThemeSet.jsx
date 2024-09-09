import React, { useState, useEffect } from 'react';
import styles from './ThemeSet.module.css'; 

const ThemeSet = () => {
  const [darkMode, setDarkMode] = useState(true);

  
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={styles.themeSwitchContainer}>
      <div className={styles.themeSwitch}>
        <input
          type="checkbox"
          className={styles.themeSwitchInput}
          id="themeSwitch"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <label className={styles.themeSwitchLabel} htmlFor="themeSwitch">
          <span className={styles.themeSwitchIndicator}></span>
          <span className={styles.themeSwitchDecoration}></span>
        </label>
      </div>
    </div>
  );
};

export default ThemeSet;
