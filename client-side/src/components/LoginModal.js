import React from 'react'
import {useState, useEffect} from 'react'

function LoginModal({onLoginSubmit, showLogin}) {

    const showLoginModal = showLogin ? "modal display-block" : "modal display-none"

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("")

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
    <div className={showLoginModal}>
        <h2>Login Form</h2>
        <form onSubmit={handleFormSubmission}>
            <div className = "form-element">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" value={email} onChange={handleEmailChange} />
            </div>
            <div className = "form-element">
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <input type="submit" value="Login"/>
        </form> 
    </div>
    )
}

export default LoginModal;