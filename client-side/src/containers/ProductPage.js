import React from 'react';
import {useSelector} from "react-redux"
import Sandwich from '../components/Product';
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

          productList.map(product => {
              return(
                  <Sandwich key={product.id} product={product}/>
              )
          }
        )

        :

        <></>

      }
  </div>);
}

export default ProductPage;
