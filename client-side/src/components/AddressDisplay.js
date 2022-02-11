import React from 'react'
import {useState} from "react";

function AddressDisplay({addressOptions, autoCompleteAddress, findAddresses, progressThroughCheckout}) {

    const [shippingSameAsBilling, setShippingSameAsBilling] = useState(true);

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
              <input type="text" id="postcode-address" required/><br></br>
              <label>Billing address the same as delivery address </label>
              <input type="checkbox" id="billing-delivery-address-checkbox" checked={shippingSameAsBilling}></input>

            </form>
            <button onClick={progressThroughCheckout}><h2>Proceed to payment</h2></button>
          </div>
          
  )
}

export default AddressDisplay