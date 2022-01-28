import Footer from "./Footer";
import Navbar from "./Navbar";
// import UserModal from "./UserModal";
import Sidebar from "./Sidebar";
import styles from "../styles/App.module.css";

import React from "react";
import Intro from "./Intro";
import Sandwich from "./Sandwich";
import Sides from "./Sides";
import Drinks from "./Drinks";
import {useState} from "react";

const Layout = ({ children }) => {

  const [showLogin, setShowLogin] = useState(false);



  return (
    <>
        <Navbar showLogin={showLogin} setShowLogin = {setShowLogin} />
        {/* <UserModal showLogin={showLogin}/> */}
        <Sidebar />
      <div className={styles.app}>
          <div className={styles.sections}>
            <Intro/>
            <Sandwich />
            <Sides />
            <Drinks />
          </div>
      </div>
      {children}
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
