import React from "react";
import styles from "../styles/Sandwich.module.css";
import Image from "next/image";

const Sandwich = () => {
  return (
    <div id="sandwich" className={styles.container}>
      <div className={styles.row}>
        <div className={styles.card}>
          <Image src="/img/beef.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Roast Beef & Horse Radish</h1>
          <span className={styles.price}>£4.50</span>
        </div>
        <div className={styles.card}>
          <Image src="/img/salmon.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Smoked Salmon & Avocado</h1>
          <span className={styles.price}>£5.75</span>
        </div>
        <div className={styles.card}>
          <Image src="/img/chicken.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Coronation Chicken</h1>
          <span className={styles.price}>£3.50</span>
        </div>
        <div className={styles.card}>
          <Image src="/img/bacon.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Bacon, Lettuce & Tomato</h1>
          <span className={styles.price}>£4.50</span>
        </div>
        <div className={styles.card}>
          <Image src="/img/shrimp.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Shrimp & Mayonnaise</h1>
          <span className={styles.price}>£6.25</span>
        </div>
        <div className={styles.card}>
          <Image src="/img/custom.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Make Your Own</h1>
          <span className={styles.price}>£5.00</span>
        </div>
      </div>
    </div>
  );
};

export default Sandwich;
