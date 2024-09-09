import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import LandingPage from "../Components/LandingPage";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./MainPage.module.css";
import InboxPage from "../Components/InboxPage";




function MainPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);
    }
  }, [token, navigate]);

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleMenuItemClick = (path) => {
    setSelectedComponent(path);
  };
  if(selectedComponent===null)
  {
    return(<div className={styles.container}>
      <SideBar onMenuItemClick={handleMenuItemClick} />
      <div className={styles.mainContent}>
        <Navbar />
        <div className={styles.contentArea}>
          {selectedComponent === null && <LandingPage />}
      
        </div>
      </div>
    </div>);
  }

  return (
    <div className={styles.container}>
      <SideBar onMenuItemClick={handleMenuItemClick} />
      <div className={styles.mainContent}>
        <Navbar />
        <div className={styles.contentArea}>
        
          {selectedComponent === "/" && <LandingPage />}
          {selectedComponent === "/search" && <LandingPage/>}
          {selectedComponent === "/mail" && <LandingPage />}
          {selectedComponent === "/send" && <LandingPage />}
          {selectedComponent === "/stack" && <LandingPage />}
          {selectedComponent === "/inbox" && <InboxPage/>}
          {selectedComponent === "/stacks" && <LandingPage />}
        </div>
      </div>
    </div>
  );
}

export default MainPage;

