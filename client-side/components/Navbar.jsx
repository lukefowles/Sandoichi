import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import {useSelector} from "react-redux";
import LoginButton from "./LoginButton";

// for editing number of items on the cart icon top right of page
const quantity = useSelector(state => state.cart.quantity);

const Navbar = ({showLogin, setShowLogin}) => {

  return (

    <div className={styles.container}>
    <div className={styles.item}>
      <div className={styles.callButton}>
        <Image src="/img/telephone.png" alt="" width="32" height="32" />
      </div>
      <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW!</div>
        <div className={styles.text}>012 345 678</div>
      </div>
    </div>
    <div className={styles.item}>
      <ul className={styles.list}>
        <Image src="/img/sandoichi.png" alt="" width="350px" height="90px" />
      </ul>
    </div>

    <div className={styles.navbuttons}>
      <div className={styles.item}>
        <ul className={styles.login}>
          <LoginButton showLogin = {showLogin} setShowLogin={setShowLogin}/>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/shopping-cart.png" alt="" width="60px" height="60px" />
          <div className={styles.counter}>{quantity}</div>
        </div>

      </div>
    </div>
  </div>
  )
};

export default Navbar;
