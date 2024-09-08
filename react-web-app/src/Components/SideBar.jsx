import React, { useState } from 'react';
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from 'react-icons/ri';
import { IoIosSend } from 'react-icons/io';
import { FaInbox } from 'react-icons/fa';
import { IoStatsChartSharp } from 'react-icons/io5';
import logo from '../assets/logo.svg';
import { TfiMenuAlt } from 'react-icons/tfi';
import styles from './SideBar.module.css'; 

function SideBar({ onMenuItemClick }) {
  const [selectedItem, setSelectedItem] = useState('/');

  const handleMenuItemClick = (path) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  return (
    <div className={styles.sidebar}>
      
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo} alt="Logo" />
      </div>

      {/* Menu icons list */}
      <div className={styles.menu}>
        {/* Home icon */}
        <div
          className={`${styles.menuItem} ${selectedItem === '/' ? styles.active : ''}`}
          onClick={() => handleMenuItemClick('/')}
        >
          <RiHome5Fill />
        </div>

        {/* Search icon */}
        <div
          className={`${styles.menuItem} ${selectedItem === '/search' ? styles.active : ''}`}
          onClick={() => handleMenuItemClick('/search')}
        >
          <RiUserSearchLine />
        </div>

        {/* Mail icon */}
        <div
          className={`${styles.menuItem} ${selectedItem === '/mail' ? styles.active : ''}`}
          onClick={() => handleMenuItemClick('/mail')}
        >
          <RiMailFill />
        </div>

        {/* Send icon */}
        <div
          className={`${styles.menuItem} ${selectedItem === '/send' ? styles.active : ''}`}
          onClick={() => handleMenuItemClick('/send')}
        >
          <IoIosSend />
        </div>

        {/* Menu icon */}
        <div
          className={`${styles.menuItem} ${selectedItem === '/stack' ? styles.active : ''}`}
          onClick={() => handleMenuItemClick('/stack')}
        >
          <TfiMenuAlt />
        </div>

        {/* Inbox icon */}
        <div
          className={`${styles.menuItem} ${selectedItem === '/inbox' ? styles.active : ''}`}
          onClick={() => handleMenuItemClick('/inbox')}
        >
          <FaInbox />
        </div>

        {/* Stats icon */}
        <div
          className={`${styles.menuItem} ${selectedItem === '/stacks' ? styles.active : ''}`}
          onClick={() => handleMenuItemClick('/stacks')}
        >
          <IoStatsChartSharp />
        </div>
      </div>

      <div className={styles.userAvatar}>AS</div>
    </div>
  );
}

export default SideBar;
