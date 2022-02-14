import React from 'react'
import check from "../img/img/check.png"
import {Link} from "react-router-dom"
import "../styles/cartPage.css"

function CompleteDisplay() {
  return (
    <div className='complete-display'>
      <h1>Thank you for your order!</h1>
      <h3>Your order will be with you in approximately 30 minutes.</h3>
      <img src={check} alt="check" />
      <button><Link to="/" >Return to main page</Link></button>
    </div>
  )
}

export default CompleteDisplay