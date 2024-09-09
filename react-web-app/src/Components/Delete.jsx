import React from "react";
import styles from './Delete.module.css'; 

const Delete = ({ onCancel, onDelete }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2 className={styles.title}>Are you sure?</h2>
        <p className={styles.message}>
          Are you sure you want to delete this mail?
        </p>
        <div className={styles.buttonContainer}>
          <button
            onClick={onCancel}
            className={styles.cancelButton}
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className={styles.deleteButton}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
