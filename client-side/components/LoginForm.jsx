import React, {useState, useEffect} from "react";
import styles from "../styles/Navbar.module.css";

const LoginForm = ({onLoginFormSubmit}) =>
{
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        onLoginFormSubmit(email, password)
    }

    return (
        <form onSubmit={handleFormSubmission}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={email} onChange={handleEmailChange}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange}/>
            </div>
            <div>
                <input type="submit" value="Sign in"/>
            </div>
        </form>
    )
}

export default LoginForm;