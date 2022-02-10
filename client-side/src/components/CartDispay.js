import React from 'react';
import Product from './Product';

function CartDispay({progressThroughCheckout, orderItems}) {
  return <div className="cart">
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
      <div className="order-info"></div>
    <button onClick={progressThroughCheckout}><h2>Proceed to payment</h2></button>
    </div>
  </div> </div>;
}

export default CartDispay;
