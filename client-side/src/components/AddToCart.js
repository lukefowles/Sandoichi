import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {addItem, updateTotal} from "../redux-elements/orders"

function AddToCart({item, quantity}) {

    const dispatch = useDispatch();
    const order = useSelector(state => state.orders)

    const addCurrentItemAndUpdateTotal = (item, addedQuantity) => {
        order.items.forEach(currentItem =>{
            if(currentItem.name == item.name){
                currentItem.quantity += 1;
                currentItem.totalPrice = currentItem.quantity * currentItem.price;
                dispatch(updateTotal())
                return;
            }
        } )
        if(quantity > 0){
            dispatch(addItem({...item, quantity: addedQuantity, totalPrice: item.price * addedQuantity}))
            dispatch(updateTotal())
        }if(quantity <= 0){
            return;
        }

        const orderString = JSON.stringify(order)

        sessionStorage.setItem("currentOrder", orderString)
        console.log(sessionStorage.getItem("currentOrder"))
    }

  return (
      <button onClick={() => addCurrentItemAndUpdateTotal(item, quantity)}><h2>Add To Cart</h2></button>
  );
}

export default AddToCart;
