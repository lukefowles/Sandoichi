import React from "react";
import styles from "../styles/Sandwich.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
import { useState } from "react";

const Sandwich = ({sandwich}) => {
  // const [price, setPrice] = useState(sandwich.price);
  // const [quantity, setQuantity] = useState();
  // const dispatch = useDispatch();



  // const handleClick = () => {
  //   dispatch(addProduct(...products, quantity))
  // };

  // onClick={handleClick()}
  // onChange={(e) => setQuantity(e.target.value)} 

  return (
    <div id="sandwich" className={styles.container}>
      <div className={styles.row}>
        <div className={styles.card}>
          <Image src="/img/beef.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Roast Beef & Horse Radish</h1>
          <span className={styles.price}>£4.50</span>
          <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}  >Add to Cart</button>
         </div>
        </div>
        <div className={styles.card}>
          <Image src="/img/salmon.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Smoked Salmon & Avocado</h1>
          <span className={styles.price}>£5.75</span>
          <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}>Add to Cart</button>
         </div>
        </div>
        <div className={styles.card}>
          <Image src="/img/chicken.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Coronation Chicken</h1>
          <span className={styles.price}>£3.50</span>
          <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}>Add to Cart</button>
         </div>
        </div>
        <div className={styles.card}>
          <Image src="/img/bacon.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Bacon, Lettuce & Tomato</h1>
          <span className={styles.price}>£4.50</span>
          <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}>Add to Cart</button>
         </div>
        </div>
        <div className={styles.card}>
          <Image src="/img/shrimp.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Shrimp & Mayonnaise</h1>
          <span className={styles.price}>£6.25</span>
          <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}>Add to Cart</button>
         </div>
        </div>
        <div className={styles.card}>
          <Image src="/img/custom.png" alt="" width="300px" height="200px" />
          <h1 className={styles.title}>Make Your Own</h1>
          <span className={styles.price}>£5.00</span>
          <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}>Add to Cart</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Sandwich;
