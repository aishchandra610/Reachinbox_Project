import React from 'react'
import header from "../assets/header.svg";
import styles from './Bar.module.css'
const Bar = () => {
  return (
    < >
    <div className={styles.customBarStyle}>
      <img src={header} alt="logo" className="h-10" />  
    </div>
  </>
  
  )
}

export default Bar