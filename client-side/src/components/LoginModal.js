import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/usermodal.css'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function LoginModal({ onLoginSubmit, showLogin, signUp, changeSignUp}) {

    const showLoginModal = showLogin ? "modal display-block" : "modal display-none"

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        onLoginSubmit(email, password)

        setEmail("")
        setPassword("")
    }

    return (
        !signUp
         
        ?

        <div className={showLoginModal}>
            <div className="loginModal">
                <h2 className="loginForm">Login Form</h2>
                <LoginForm  onLoginSubmit={onLoginSubmit}/>
                <p className="signUp">Don't have an account?</p>
                <button className="signUp" id="signUpButton" onClick={changeSignUp}>Create Account</button>
            </div>
        </div>

        :

        <div className={showLoginModal}>
            <div className="loginModal">
                <h2 className="signUpForm">Sign Up Form</h2>
                <SignUpForm/>
            </div>

        </div>
    )
}

export default LoginModal;