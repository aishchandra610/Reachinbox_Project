import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import styles from './Navbar.module.css';
import ThemeSet from './ThemeSet';

const Navbar = () => {
  return (
    <div className={`${styles.navbar} ${styles.navbarDark}`}>
    <div className={styles.navbarFont}>Onebox</div>
    
    <div className={styles.navbarButton}>
    <ThemeSet />
        <div className={styles.navbarText}>
        <span> Tim's Workspace </span>
        <MdOutlineKeyboardArrowDown className={styles.icon} />
        
        </div>
      
       
    </div>
</div>
  )
}

export default Navbar
