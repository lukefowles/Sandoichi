import { createDraftSafeSelector } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "../styles/cartPage.css";
import CartDisplay from '../components/CartDisplay';
import AddressDisplay from '../components/AddressDisplay';
import PaymentDisplay from '../components/PaymentDisplay';

function CartPage() {
  const apiKey = "8D_nhIQ030eXrUffBWulyA34206"

  const [checkoutProgress, setCheckoutProgress] = useState("cart")
  const [postCode, setPostCode] = useState();
  const [addressOptions, setAddressOptions] = useState();
  const orderItems = useSelector(state => state.orders.items)
  const orderTotal = useSelector(state => state.orders.totalCost)

  

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
          <CartDisplay progressThroughCheckout={progressThroughCheckout} orderItems={orderItems} orderTotal={orderTotal}/>
        )
      case "address":
        return (
          <AddressDisplay addressOptions={addressOptions} autoCompleteAddress={autoCompleteAddress} findAddresses={findAddresses} progressThroughCheckout={progressThroughCheckout}/>
        )
      case "payment":
        return <PaymentDisplay/>
    }

  }

  return <>
      {renderSwitch()}
    </>
}

export default CartPage;
