import { createDraftSafeSelector } from '@reduxjs/toolkit';
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
        .then(data => setAddressOptions(data))
    }

  const autoCompleteAddress = () =>{

    const select = document.getElementById('first-line-address');
    const selectedValue = select.options[select.selectedIndex];

    document.getElementById('first-line-address-text').value = selectedValue.getAttribute("line_1");
    document.getElementById('second-line-address-text').value = selectedValue.getAttribute("line_2");
    document.getElementById('city-address').value = selectedValue.getAttribute("town_or_city");
    document.getElementById('county-address').value = selectedValue.getAttribute("county");
    document.getElementById('postcode-address').value = selectedValue.getAttribute("postcode");
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
              {addressOptions ?
              <>
              <label >Choose the first line of your address: </label><br></br>
              <select name="first-line-address" id="first-line-address" onChange={(event) => autoCompleteAddress()}>
              <option value="" disabled selected>Choose first line of address</option>
                
                {
                  addressOptions.addresses.map((address) => {
                    return <option line_1={address.line_1} 
                    line_2={address.line_2} 
                    town_or_city={address.town_or_city}
                    county={address.county} 
                    postcode={addressOptions.postcode}>
                      {address.formatted_address} 
                    </option>
                  })
                }
              </select>
              <br></br>
              </>
                  :
                  <></>
                }
              <label>First line of Address: </label>
              <input type="text" id="first-line-address-text" required/> <br></br>
              <label>Second line of Address: </label>
              <input type="text" id="second-line-address-text"/><br></br>
              <label id="City/Town">City/Town: </label>
              <input type="text" id="city-address" required/><br></br>
              <label>County: </label>
              <input type="text" id="county-address" required/><br></br>
              <label>Postcode: </label>
              <input type="text" id="postcode-address" required/>
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
