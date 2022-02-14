import React from 'react'
import check from "../img/img/check.png"

function CompleteDisplay() {
  return (
    <div>
      <h1>Thank you for your order!</h1>
      <h3>Your order will be with you in approximately 30 minutes.</h3>
      <img src={check} alt="check" />

    </div>
  )
}

export default CompleteDisplay