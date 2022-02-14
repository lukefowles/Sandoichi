import React from 'react'
import { useState, useEffect } from 'react'

function LoginForm({onLoginSubmit}) {
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
        <form className="loginForm" onSubmit={handleFormSubmission}>
                    <div className="form-element">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className="form-element">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <input type="submit" value="Login" />
        </form>
    )
}

export default LoginForm