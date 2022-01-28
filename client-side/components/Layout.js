import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styles from "../styles/App.module.css";

import React from "react";
import Intro from "./Intro";
import Sandwich from "./Sandwich";
import Sides from "./Sides";
import Drinks from "./Drinks";

const Layout = ({ children }) => {
  return (
    <>
        <Navbar />
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
