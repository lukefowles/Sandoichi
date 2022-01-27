import React from 'react';
import styles from "../styles/Sides.module.css";
import Image from "next/image";


const Sides = () => {
  return ( 
    <div id="sides" className={styles.container}>
      <div className={styles.row}>
        <div className={styles.card}>
          <Image src="/img/cajun.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Cajun Spiced Fries</h1>
          <span className={styles.price}>£4.50</span>
        </div>
        <div className={styles.card}>
          <Image src="/img/kale.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Organic Kale Crisps</h1>
          <span className={styles.price}>£2.25</span>
        </div>
        <div className={styles.card}>
          <Image src="/img/sweet.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Sweet Potato Crisps</h1>
          <span className={styles.price}>£3.00</span>
        </div>
        <div className={styles.card}>
          <Image src="/img/coleslaw.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Coleslaw & Blue Cheese</h1>
          <span className={styles.price}>£6.50</span>
        </div>
        <div className={styles.card}>
          <Image src="/img/fruit.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Cherry Pecan Fruit Salad</h1>
          <span className={styles.price}>£5.50</span>
        </div>
        <div className={styles.card}>
          <Image src="/img/soup.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Soup of the Day</h1>
          <span className={styles.price}>£3.00</span>
        </div>
      </div>
    </div>
)    
};

export default Sides;
