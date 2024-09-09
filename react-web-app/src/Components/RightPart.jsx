import React from 'react'
import { IoIosSend } from "react-icons/io";
import mail from "../assets/mail.svg";
import { IoMailOpen } from "react-icons/io5";
import styles from './RightPart.module.css'
const RightPart = () => {
  return (
    <div className={`${styles.rightSectionContainer} no-scrollbar`}>
    <div className={`${styles.sectionHeader} ${styles.mt5}`}>Lead Details</div>
    <div className={styles.detailsSection}>
      <div className={styles.detailsRow}>
        <div>Name</div>
        <div className={styles.grayText}>Orlando</div>
      </div>
      <div className={styles.detailsRow}>
        <div>Contact No</div>
        <div className={styles.grayText}>+54-9062827869</div>
      </div>
      <div className={styles.detailsRow}>
        <div>Email ID</div>
        <div className={styles.grayText}>orlando@gmail.com</div>
      </div>
      <div className={styles.detailsRow}>
        <div>Linkedin</div>
        <div className={styles.grayText}>linkedin.com/in/timvadde/</div>
      </div>
      <div className={styles.detailsRow}>
        <div>Company Name</div>
        <div className={styles.grayText}>Reachinbox</div>
      </div>
    </div>

    <div className={`${styles.sectionHeader} ${styles.mt8}`}>Activities</div>

    <div className={styles.activitiesSection}>
      <div className={styles.campaignName}>Campaign Name</div>
      <div className={styles.campaignDetails}>3 Steps | 5 Days in Sequence</div>
      <div className={styles.stepsContainer}>
        {[
          { step: "Step 1: Email", status: "Sent 3rd, Feb", icon: <IoIosSend />, bgColor: "" },
          { step: "Step 2: Email", status: "Open 5th, Feb", icon: <IoMailOpen className={styles.yellowIcon} />, bgColor: "" },
          { step: "Step 3: Email", status: "Open 5th, Feb", icon: <IoMailOpen className={styles.yellowIcon} />, bgColor: "" },
        ].map((item, index) => (
          <div key={index} className={styles.stepItem}>
            <img src={mail} className={styles.stepIcon} alt="Mail Icon" />
            <div className={styles.stepText}>
              <div>{item.step}</div>
              <div className={styles.stepStatus}>
                {item.icon} {item.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default RightPart