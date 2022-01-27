import React from 'react';
import styles from "../styles/Drinks.module.css";
import Image from "next/image";


const Drinks = () => {
  return ( 
    <div id="drinks" className={styles.container}>
      <div className={styles.row}>
        <div className={styles.card}>
          <Image src="/img/ginger.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Fiery Peruvian Ginger Beer</h1>
          <span className={styles.price}>£4.50</span>
        </div>
        <div className={styles.card}>
          <Image src="/img/apple.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Freshly Pressed Apple Juice</h1>
          <span className={styles.price}>£5.75</span>
        </div>
        <div className={styles.card}>
          <Image src="/img/pimms.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Pomegranate Pimm's Royale</h1>
          <span className={styles.price}>£3.50</span>
        </div>
        <div className={styles.card}>
          <Image src="/img/coffee.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Arabian Coffee</h1>
          <span className={styles.price}>£3.50</span>
        </div>
        <div className={styles.card}>
          <Image src="/img/tea.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Tea from the Mountains</h1>
          <span className={styles.price}>£2.00</span>
        </div>
        <div className={styles.card}>
          <Image src="/img/cocoa.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Spiced Hot Cocoa</h1>
          <span className={styles.price}>£3.00</span>
        </div>
      </div>
    </div>
)    
};

export default Drinks;
