import React from "react";
import Image from "next/image";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarItems}>
        <div className={styles.texts}>
          {/* <div className={styles.sandwich}>
            <Image src="/./img/sandwich-2.png" alt="" width="30" height="30" />
          </div> */}

          <div className={styles.text}><a href="#home">HOME</a></div>
          <div className={styles.text}><a href="#sandwich">SANDWICHES</a> </div>
          <div className={styles.text}><a href="#sides">SIDES</a> </div>
          <div className={styles.text}><a href="#drinks">DRINKS</a> </div>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
