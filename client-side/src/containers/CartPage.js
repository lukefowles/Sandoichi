import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "../styles/cartPage.css";
import CartDisplay from '../components/CartDisplay';
import AddressDisplay from '../components/AddressDisplay';
import CompleteDisplay from '../components/CompleteDisplay';
import axios from 'axios';
import {changeAddress} from '../redux-elements/deliveryAddress'



function CartPage() {
  const apiKey = "8D_nhIQ030eXrUffBWulyA34206"

  const [checkoutProgress, setCheckoutProgress] = useState("cart")
  const [postCode, setPostCode] = useState();
  const [addressOptions, setAddressOptions] = useState();
  const orderItems = useSelector(state => state.orders.items)
  const orderTotal = useSelector(state => state.orders.totalCost)

  const[showLogin, setShowLogin] = useState(false);
  const [signUp, setShowSignUp] = useState(false)
  const  deliveryAddress = useSelector((state) => state.address.address)
  

  const user = useSelector((state) => state.user.user)
  const loggedIn = useSelector((state) => state.loggedIn.loggedIn)

  //Function which changes the state of login modal
  
  function changeShowLogin() {
    setShowSignUp(false)
    setShowLogin(!showLogin)
    console.log('works')
  }
 

  const progressThroughCheckout = () => {
    switch(checkoutProgress){
      case "cart":
        if(loggedIn){
          setCheckoutProgress("address")
        }else{
          changeShowLogin();
        }
        break;
      case "address":
        setCheckoutProgress("complete");
        break;
      case "complete":
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

  function postOrder (orderItems, totalCost, deliveryAddress, userId) {
    axios.post('/orders/add', {
      "items" : orderItems,
      "deliveryAddress" : deliveryAddress,
      "totalCost" : totalCost,
      "user" : userId
    })
    .then((result) => alert(result.data))
}

  const renderSwitch = () => {
    switch(checkoutProgress){
      case "cart":
        return(
          <CartDisplay progressThroughCheckout={progressThroughCheckout} orderItems={orderItems} orderTotal={orderTotal} showLogin={showLogin} signUp={signUp} setShowSignUp={setShowSignUp} changeShowLogin={changeShowLogin} user={user} loggedIn={loggedIn}/>
        )
      case "address":
        return (
          <AddressDisplay addressOptions={addressOptions} autoCompleteAddress={autoCompleteAddress} findAddresses={findAddresses} progressThroughCheckout={progressThroughCheckout}
                          postOrder={postOrder}/>
        )
      case "complete":
        return <CompleteDisplay/>
    }

  }

  return <>
      {renderSwitch()}
    </>
}

export default CartPage;
