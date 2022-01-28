import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import LoginButton from "./LoginButton";

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
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  </div>

  // <div className={styles.container}>
  //       <div className={styles.text}>Sandoichi</div>
  //         {/* <div className={styles.callButton}>
  //           <Image src="/./img/logo.png" alt="" width="200" height="80"/>
  //         </div> */}

    // <div className={styles.item}>
    //   <div className={styles.cart}>
    //     <Image src="/img/shopping-cart.png" alt="" width="30px" height="30px" />
    //     <div className={styles.counter}>2</div>
    //   </div>
    // </div>
  // </div>
  )
};

export default Navbar;
