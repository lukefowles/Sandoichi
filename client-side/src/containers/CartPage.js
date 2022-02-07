import React, { useState } from 'react';
import "../styles/cartPage.css";

function CartPage() {
  const apiKey = "8D_nhIQ030eXrUffBWulyA34206"

  const [checkoutProgress, setCheckoutProgress] = useState("cart")
  const [postCode, setPostCode] = useState();
  const [addressOptions, setAddressOptions] = useState();

  const progressThroughCheckout = () => {
    switch(checkoutProgress){
      case "cart": 
        setCheckoutProgress("address");
        break;
      case "address":
        setCheckoutProgress("payment");
        break;
      case "payment":
        setCheckoutProgress("complete")
        break;
    }
  }

  const findAddresses = (input) => {
    fetch(`https://api.getaddress.io/find/${input.replace(/\s/g, '')}?expand=true&api-key=${apiKey}`,
        {
            method: 'GET',
            headers: {
                "content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => setAddressOptions(data.addresses))
    }


  const renderSwitch = () => {
    switch(checkoutProgress){
      case "cart":
        return(
        <div className="cart">
        <h1>Complete your order</h1>
        <div className="cart-area">
          <div className="cart-item-list"></div>
          <div className="cart-sidebar">
            <div className="order-info"></div>
          <button onClick={progressThroughCheckout}><h2>Proceed to checkout</h2></button>
          </div>
        </div> </div>)
      case "address":
        return (
          <div className="cart">
            <h1>Please enter delivery details</h1>
            <form>
              <label >Enter postcode: </label>
              <input name="postcode" type="text" id="postcode" onChange={(event) => findAddresses(event.target.value)}/><br></br>
              <label >Choose the first line of your address: </label>
              {addressOptions ?
              <select name="first-line-address" id="first-line-address">
                
                {
                  addressOptions.map((address) => {
                    return <option>{address.formatted_address}</option>
                  })
                }
              </select>
                  :
                  <></>
                }
            </form>
          </div>
        )
    }

  }

  return <>
      {renderSwitch()}
    </>
}

export default CartPage;
