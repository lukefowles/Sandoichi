import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {addItem, updateTotal} from "../redux-elements/orders"

function AddToCart({item}) {

    const dispatch = useDispatch();
    const order = useSelector(state => state.orders)

    const addCurrentItemAndUpdateTotal = (item) => {
        dispatch(addItem(item))
        dispatch(updateTotal())

        const orderString = JSON.stringify(order)

        sessionStorage.setItem("currentOrder", orderString)
    }

  return (
      <button onClick={() => addCurrentItemAndUpdateTotal(item)}><h2>Add To Cart</h2></button>
  );
}

export default AddToCart;
