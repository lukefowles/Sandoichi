import React from 'react';
import { useState, useEffect } from 'react'

function SignUpForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleAddressChange = (event) => {
        setEmail(event.target.value)
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        // onLoginSubmit(email, password)

        setEmail("")
        setPassword("")
        setName("")
        setAddress("")
    }

    return(
        <form className="loginForm" onSubmit={handleFormSubmission}>
                    <div className="form-element">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={password} onChange={handleNameChange} />
                    </div>
                    <div className="form-element">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className="form-element">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className="form-element">
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" value={address} onChange={handleAddressChange} />
                    </div>
                    <input type="submit" value="Sign Up" />
        </form>
    )
}

export default SignUpForm