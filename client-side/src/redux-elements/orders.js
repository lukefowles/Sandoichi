import {createSlice} from "@reduxjs/toolkit"

const order = JSON.parse( sessionStorage.getItem("currentOrder"))
console.log(order)

export const orderSlice = createSlice({
    name: "order",
    initialState: {
        items: order ? order.items.map( item =>{
            return {
                id: parseInt(item.id),
                type: item.type,
                name: item.name,
                price: parseFloat(item.price),
                quantity: parseInt(item.quantity),
                src: item.src,
            }
        }) 
        : [], 
        totalCost: order? parseFloat(order.totalCost) : 0 
    },
    reducers:{addItem: (state, action) => {
        action ?
            state.items.push(action.payload)
            :
            state.items = state.items
    },
    updateTotal: (state) => {
        if(state.items.length > 0){
            let total = 0;
            state.items.forEach(item => total += item.totalPrice)
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