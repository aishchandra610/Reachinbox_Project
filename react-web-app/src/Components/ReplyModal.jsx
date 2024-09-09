import React, { useState } from "react";
import axios from "axios";
import styles from './ReplyModal.module.css'; 
import { BsLightningChargeFill } from "react-icons/bs";
import { FaCaretDown, FaEye, FaImage, FaRegSmile, FaUserMinus } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";

const ReplyModal = ({ threadId, onClose }) => {
  const [replyData, setReplyData] = useState({
    to: "",
    from: "",
    subject: "",
    body: "",
  });

  const handleSendReply = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
        replyData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("Reply sent successfully");
      onClose();
    } catch {
      console.log("Error sending reply");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.title}>Reply</div>
          <RxCross2 className={styles.closeIcon} onClick={onClose} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>To :</label>
          <input
            className={styles.input}
            placeholder="Recipient's Email"
            name="to"
            value={replyData.to}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>From :</label>
          <input
            className={styles.input}
            placeholder="Your Email"
            name="from"
            value={replyData.from}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Subject :</label>
          <input
            className={styles.input}
            placeholder="Subject"
            name="subject"
            value={replyData.subject}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.textAreaContainer}>
          <textarea
            className={styles.textArea}
            placeholder="Message Body"
            name="body"
            value={replyData.body}
            onChange={handleTextAreaChange}
          />
        </div>
        <div className={styles.footer}>
          <div className={styles.sendButton} onClick={handleSendReply}>
            Send <FaCaretDown className={styles.icon} />
          </div>
          <div className={styles.iconGroup}>
            <BsLightningChargeFill className={styles.icon} />
            Variables
          </div>
          <div className={styles.iconGroup}>
            <FaEye className={styles.icon} />
            Preview Email
          </div>
          <div className={styles.icons}>
            <TbSquareLetterA className={styles.icon} />
            <IoLinkSharp className={styles.icon} />
            <FaImage className={styles.icon} />
            <FaRegSmile className={styles.icon} />
            <FaUserMinus className={styles.icon} />
            <IoMdCode className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyModal;
