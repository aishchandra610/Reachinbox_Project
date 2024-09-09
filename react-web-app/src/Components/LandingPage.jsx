import React, { useEffect } from 'react'
import axios from "axios";
import img from "../assets/i.svg";
import styles from "./LandingPage.module.css";
const LandingPage = () => {
    useEffect(() => {
        const call = async () => {
          const token = localStorage.getItem("token");
          try {
            await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
              headers: {
                Authorization: token,
              },
            });
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        call();
      }, []);
  
    
    
      return (
        <div className={styles.container}>
          <div>
            <img src={img} alt="Sales pipeline" />
          </div>
          <div className={styles.title}>
            It's the beginning of a legendary sales pipeline
          </div>
          <div className={styles.subtitle}>
            When you have inbound E-mails <br /> you'll see them here
          </div>
        </div>
      );
  
}

export default LandingPage