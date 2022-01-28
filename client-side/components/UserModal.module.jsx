import React from "react";
import styles from "../styles/UserModal.module.css";
import LoginForm from "./LoginForm"

const UserModal = ({showLogin}) => {

    // const showHideModal= showLogin ? "modal display-block" : "modal display-none";

    const showHideModal= showLogin ? "modal display-block" : "modal display-none";

    console.log(showLogin)

    return(
        <div className={showHideModal}>
            <LoginForm/>
        </div>
    )
}

export default UserModal;