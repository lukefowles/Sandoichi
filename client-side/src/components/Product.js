import React from 'react';
import "../styles/productPage.css"
import AddToCart from './AddToCart';


function Product({product}) {

  return (<div className="product">
      <img src={product.src} alt={product.name}/>
        <h3>{product.name}</h3>
        <h4>£{product.price}</h4>
        <AddToCart/>
  </div>);
}
export default Product;
