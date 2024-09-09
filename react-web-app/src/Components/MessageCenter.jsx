import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ReplyModal from "./ReplyModal";
import { MdOutlineExpand } from "react-icons/md";
import { FaReply } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import Delete from "./Delete";
import styles from "./MessageCenter.module.css";

const MessageCenter = ({ selectedThread }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedMail, setSelectedMail] = useState([]);
  const customMailRef = useRef(null);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
        {
          headers: {
            Authorization: token,
          }
        }
      );
      setShowDelete(false);
      setShowPopUp(false); 
    } catch (error) {
      console.error("Error deleting mail:", error);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "d" || event.key === "D") {
        setShowDelete(!showDelete);
      }

      if (event.key === "r" || event.key === "R") {
        setShowPopUp(!showPopUp);
        console.log("Pressed R");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [showDelete, showPopUp]);

  useEffect(() => {
    const fetchMail = async () => {
      if (selectedThread) {
        try {
          const token = localStorage.getItem("token");
          const res = await axios.get(
            `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
            {
              headers: {
                Authorization: token,
              }
            }
          );
          setSelectedMail(res.data.data);
        } catch (error) {
          console.error("Error fetching mail:", error);
        }
      } else {
        setSelectedMail([
          {
            id: 0,
            fromName: "",
            fromEmail: "jeanne@icloud.com",
            toName: "",
            toEmail: "lennon.j@mail.com",
            subject: "New Product Launch",
            body: "I would like to introduce you to SaaSgrow...",
            sentAt: "2022-01-01T00:00:00.000Z",
          }
        ]);
      }
    };
    fetchMail();
  }, [selectedThread, showDelete]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <div className={styles.senderName}>Orlando</div>
          <div className={styles.senderEmail}>orladom@gmail.com</div>
        </div>
        <div className={styles.actionButtons}>
          <div className={styles.statusButton}>
            <GoDotFill className={styles.dotIcon} /> Meeting Completed{" "}
            <SlArrowDown className={styles.arrowDownIcon} />
          </div>
          <div className={styles.moveButton}>
            Move <SlArrowDown className={styles.arrowDownIcon} />
          </div>
          <div className={styles.moreOptionsButton}>...</div>
        </div>
      </div>

      <div className={styles.dateLineContainer}>
        <div className={styles.dateLine}></div>
        <div className={styles.todayText}>Today</div>
      </div>

      <div>
        {selectedMail.map((mail) => (
          <Mail key={mail.id} {...mail} />
        ))}
      </div>

      <div className={styles.viewRepliesContainer}>
        <div className={styles.viewRepliesLine}></div>
        <div className={styles.viewReplies}>
          <MdOutlineExpand className={styles.expandIcon} /> View all{" "}
          <span className={styles.replyCount}>4</span> replies
        </div>
      </div>

      <div className={styles.replyContainer} ref={customMailRef}>
        {showPopUp && (
          <ReplyModal
            threadId={selectedThread}
            onClose={() => setShowPopUp(false)}
          />
        )}
      </div>

      <div
        className={styles.replyButton}
        onClick={togglePopUp}
      >
        <FaReply className={styles.replyIcon} /> Reply
      </div>

      {showDelete && (
        <Delete
          onCancel={() => setShowDelete(false)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

const Mail = ({ fromEmail, toEmail, subject, body }) => {
  return (
    <div className={styles.mailContainer}>
      <div className={styles.mailContent}>
        <div className={styles.mailHeader}>
          <div>
            <div className={styles.mailSubject}>{subject}</div>
            <div className={styles.mailFrom}>from: {fromEmail}</div>
            <div className={styles.mailTo}>to: {toEmail}</div>
          </div>
          <div className={styles.mailDate}>20 June 2022 : 9:16 AM</div>
        </div>
        <div
          className={styles.mailBody}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </div>
  );
};

export default MessageCenter;
