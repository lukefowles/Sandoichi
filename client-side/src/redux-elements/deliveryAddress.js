import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


export const deliveryAddress = createSlice({

    name: "address",
    initialState: {address : ""},
    reducers: {
        changeAddress: (state, action) => {
            state.address = action.payload
        } 
    } 

})

export const {changeAddress} = deliveryAddress.actions ;
export default deliveryAddress.reducer;

