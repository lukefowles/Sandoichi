import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
  <div className={styles.container}>


        <div className={styles.text}>Sandoichi</div>
          {/* <div className={styles.callButton}>
            <Image src="/./img/logo.png" alt="" width="200" height="80"/>
          </div> */}

          <div>
              <div>
              <Image src="/./img/shopping-cart.png" alt="" width="30" height="30" />
              </div>
          </div>

     
  </div>
  )
};

export default Navbar;
