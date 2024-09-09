import { useEffect, useState } from "react";
import axios from "axios";
import Inbox from "./Inbox";
import RightPart from "./RightPart";
import PulseLoader from "react-spinners/PulseLoader";
import styles from "./InboxPage.module.css";
import MessageCenter from "./MessageCenter";

function InboxPage() {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedThread, setSelectedThread] = useState(null);
  console.log(selectedThread);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <PulseLoader color="#5B5F66" loading={loading} size={20} />
      </div>
    );
  }

  const loadMail = async (threadId) => {
    setSelectedThread(threadId);
  };

  return (
    <div className={styles.inboxContainer}>
      <div className={styles.inboxLeft}>
        <Inbox data={datas} loadMail={loadMail} />
      </div> 
      <div className={styles.inboxCenter}>  
        <MessageCenter selectedThread={selectedThread} />
      </div>
      <div className={styles.inboxRight}>
        <RightPart/>
      </div>
      
    </div>
  );
}

export default InboxPage;
