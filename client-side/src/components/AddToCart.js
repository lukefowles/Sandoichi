import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {addItem, updateTotal} from "../redux-elements/orders"

function AddToCart({item, quantity}) {

    const dispatch = useDispatch();
    const order = useSelector(state => state.orders)

    const addCurrentItemAndUpdateTotal = (item, quantity) => {
        
        for(let i = 0; i < quantity; i++){
            dispatch(addItem(item))
            dispatch(updateTotal())
        }

        const orderString = JSON.stringify(order)

        sessionStorage.setItem("currentOrder", orderString)
    }

  return (
      <button onClick={() => addCurrentItemAndUpdateTotal(item, quantity)}><h2>Add To Cart</h2></button>
  );
}

export default AddToCart;
