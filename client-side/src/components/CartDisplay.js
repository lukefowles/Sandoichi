import React from 'react';
import Product from './Product';
import amex from "../img/img/amex (1).png";
import visa from "../img/img/visa (1).png";
import mastercard from "../img/img/mastercard (1).png";
import LoginModal from '../components/LoginModal';
import {useSelector} from "react-redux";
import {useState} from "react";

function CartDisplay({progressThroughCheckout, orderItems, orderTotal, showLogin, signUp, setShowSignUp,changeShowLogin, loggedIn, user }) {

  const deliveryCharge = 4.25
  const totalWithDelivery = parseFloat(orderTotal) + deliveryCharge;

  //State to monitor login modal
  

  return <div className="cart">
  <LoginModal showLogin={showLogin} loggedIn={loggedIn} signUp={signUp} setShowSignUp={setShowSignUp} changeShowLogin={changeShowLogin} user={user}/>  
  <h1>Complete your order</h1>
  <div className="cart-area">
    <div className="cart-item-list">
        {
            orderItems.map(item => {
                return <Product product={item} selectedQuantity={item.quantity} inCart={true}/>
            
            })
        }
    </div>
    <div className="cart-sidebar">
      <div className="order-info">
        {/* {
          orderItems.map(item => {
            return <p>£{`${(Math.round(item.price * 100) / 100).toFixed(2)} x ${item.quantity}`}</p>
          })
        } */}
        <p>Order Total: £{(Math.round(parseFloat(orderTotal) * 100) / 100).toFixed(2)}</p>
        <p>Delivery Charge: £{(Math.round(deliveryCharge * 100) / 100).toFixed(2)}</p>
        <h3>TOTAL CHARGE: £{(Math.round(totalWithDelivery * 100) / 100).toFixed(2)}</h3>
        </div>
        <button onClick={progressThroughCheckout}><h2>Proceed to checkout</h2></button>
        <div className='payment-methods'>
        <p>We accept: </p> 
          <img className='payment-icon' src={amex} alt="amex"/>
          <img className='payment-icon'  src={visa} alt="visa"/>
          <img className='payment-icon'  src={mastercard} alt="mastercard"/>
        </div>
        <p className="tandCs">Prices and delivery costs are not confirmed until you've reached the checkout. Orders are final</p>
        </div>
        
    </div>
  </div>;
}

export default CartDisplay;
