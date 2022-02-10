import React from 'react';
import {useSelector} from "react-redux"
import Product from '../components/Product';
import "../styles/productPage.css"


function ProductPage({productType}) {

    // const selector = useSelector()
    
    const productList = useSelector((state) => {
        switch(productType){
            case "sandwich":
                return state.products.sandwichList;
            case "side":
                return state.products.sideList;
            case "drink":
                return state.products.drinkList;
            default:
                return null;
        }
    })


  return (<div className="product-list">
      {
          productList ?

          Object.values(productList).map(product => {
              return(
                  <Product key={product.id} product={product} inCart={false}/>
              )
          }
        )

        :

        <></>

      }
  </div>);
}

export default ProductPage;
