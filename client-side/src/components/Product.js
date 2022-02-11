import React from 'react';
import "../styles/productPage.css"
import AddToCart from './AddToCart';
import {useState} from "react";

function Product({product, inCart, selectedQuantity}) {

  const [quantity, setQuantity] = useState(() =>{
    if(selectedQuantity) return selectedQuantity;
    else return 1;
  })

  const handleAdd = () => {
    setQuantity(quantity + 1)
  }
  const handleSubtract = () => {
    if(quantity > 1){
      setQuantity(quantity - 1)
    }
  }

  const renderSwitch = () => {
    if(inCart){
      return(
      <div className="product-inCart">
      <img src={product.src} alt={product.name}/>
        <h3>{product.name}</h3>
        <h4>£{(Math.round(product.totalPrice * 100) / 100).toFixed(2)}</h4>
          <h3>{quantity}</h3>
  </div>
      )
    }else{
      return(
      <div className="product">
      <img src={product.src} alt={product.name}/>
        <h3>{product.name}</h3>
        <div className="quantity-controller">
        <h4>£{product.price}</h4>       
        <button onClick={handleSubtract}>-</button>
          <h3>{quantity}</h3>
          <button onClick={handleAdd}>+</button>
        </div>
        <AddToCart item={product} quantity={quantity}/>
  </div>
      )
    }
  }

  return (<>{renderSwitch()}</>);
}
export default Product;
