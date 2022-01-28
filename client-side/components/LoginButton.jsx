import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const LoginButton = ({showLogin, setShowLogin}) => {


    const handleClick = () => {
        setShowLogin(!showLogin);
        console.log(showLogin)
    }

    return(
        <button type="button" onClick = {handleClick} className={styles.loginButton}>
            <Image src="/img/outline_person_outline_black_48dp.png" alt="" width="40px" height="40px" />
        </button>
    )
}

export default LoginButton;