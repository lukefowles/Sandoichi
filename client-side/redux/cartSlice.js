import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[],
        quantity: 0,
        total: 0,
    },
    reducers:{
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        reset:(state) => {
            state = initialState;
        },
    },
});

export const {addProduct,reset} = cartSlice.actions;
export default cartSlice.reducer;

// reducer - first reducer is add new product. We will take current state and action and update the initial state. The first one will be push(action.payload), so we are passing in our sandwich product details as payload.
// state.quantity - just increasing it by 1 every time something is added. This is different from the other quantity for increasing products. Just the number on the cart icon on top right of page.
// state.total - starting price will be 0 at the beginning, and then pushing in payload by multiplying quantity and price.
// reset:(state) - resetting out cart back to zero once the user checks out