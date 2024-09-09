import React, { useEffect } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { TbReload } from "react-icons/tb";
import styles from './Inbox.module.css'; 

function Inbox({ data, loadMail }) {
  
  const reloadHandler = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const response = await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
        headers: {
          Authorization: token,
        },
      });

      if (response.data) {
        console.log("API Response:", response.data);
      } else {
        console.warn("API returned null or empty data.");
      }
    } catch (error) {
      console.error("Error during reload:", error);
    }
  };

  if (!Array.isArray(data)) {
    console.error("Data is not an array or is null:", data);
    return <p>No data available</p>; // Return a message if the data is not in the expected format
  }

  return (
    <div className={styles.allInbox}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.title}>
            All Inbox(s) <FaAngleDown className={styles.dropdownIcon} />
          </div>
          <div className={styles.count}>
            {data.length}/25 <span className={styles.countLabel}>Inboxes selected</span>
          </div>
        </div>
        <div className={styles.reloadButton} onClick={reloadHandler}>
          <TbReload className={styles.reloadIcon} />
        </div>
      </div>

      <div className={styles.searchBar}>
        <div className={styles.searchInputContainer}>
          <input
            placeholder="Search"
            className={styles.searchInput}
          />
          <CiSearch className={styles.searchIcon} />
        </div>
        <div className={styles.newReplies}>
          <div className={styles.repliesCount}>
            <span className={styles.countBadge}>{data.length}</span> New Replies
          </div>
          <div className={styles.sorting}>
            Newest <FaAngleDown className={styles.sortingIcon} />
          </div>
        </div>
      </div>

      <div className={styles.emailList}>
        {data.map((email) => (
          <Mail
            key={email.id}
            fromEmail={email.fromEmail}
            subject={email.subject}
            threadId={email.threadId}
            loadMail={loadMail}
          />
        ))}
      </div>
    </div>
  );
}

function Mail({ fromEmail, subject, threadId, loadMail }) {
  const trimSubject = (subject, wordCount) => {
    const words = subject.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + " ...";
    }
    return subject;
  };

  const handleMailClick = () => {
    loadMail(threadId);
  };

  return (
    <div className={styles.mail} onClick={handleMailClick}>
      <div className={styles.mailHeader}>
        <div className={styles.fromEmail}>{fromEmail}</div>
        <div className={styles.date}>Mar 7</div>
      </div>
      <div className={styles.subject}>{trimSubject(subject, 7)}</div>
      <div className={styles.tags}>
        <div className={`${styles.tag} ${styles.interested}`}>
          <GoDotFill className={styles.tagIcon} />
          Interested
        </div>
        <div className={`${styles.tag} ${styles.campaign}`}>
          <IoIosSend className={styles.tagIcon} />
          Campaign Name
        </div>
      </div>
    </div>
  );
}

export default Inbox;
