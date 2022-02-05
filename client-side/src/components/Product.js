import React from 'react';
import "../styles/productPage.css"
import AddToCart from './AddToCart';
import {useState} from "react";

function Product({product}) {

  const [quantity, setQuantity] = useState(1)

  const handleAdd = () => {
    setQuantity(quantity + 1)
  }
  const handleSubtract = () => {
    if(quantity > 1){
      setQuantity(quantity - 1)
    }
  }

  return (<div className="product">
      <img src={product.src} alt={product.name}/>
        <h3>{product.name}</h3>
        <div className="quantity-controller">
        <h4>£{product.price}</h4>       
        <button onClick={handleSubtract}>-</button>
          <h3>{quantity}</h3>
          <button onClick={handleAdd}>+</button>
        </div>
        <AddToCart item={product}/>
  </div>);
}
export default Product;
