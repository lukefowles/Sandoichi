import {createSlice} from "@reduxjs/toolkit"

export const orderSlice = createSlice({
    name: "order",
    initialState: {items:[], totalCost:0},
    reducers:{addItem: (state, action) => {
        action ?
            state.items.push(action.payload)
            :
            state.items = state.items
    },
    updateTotal: (state) => {
        if(state.items.length > 0){
            let total = 0;
            state.items.forEach(item => total += item.price)
            state.totalCost = (Math.round(total * 100) / 100).toFixed(2);
        }
        else{
        state.totalCost = 0;
        }
    }
    }
})

export const {addItem, updateTotal} = orderSlice.actions

export default orderSlice.reducer;