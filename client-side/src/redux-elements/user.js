import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name: "",
        email: "",
        address: "",
        password: "",
        orders: []}
    }

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeName: (state, action) => {
            state.user.name = action.payload;
        },
        changeEmail: (state, action) => {
            state.user.email = action.payload;
        },
        changeAddress: (state, action) => {
            state.user.address = action.payload;
        },
        changePassword: (state, action) => {
            state.user.password = action.payload;
        },
        changeOrders: (state, action) => {
            state.user.orders = action.payload;
        },
        changePassword: (state, action) => {
            state.user.password = action.payload;
        },
        logout: (state) => {
            state = initialState;
        }
    }
});

export const {logout, changeName, changeAddress, changeEmail, changeOrders, changePassword} = userSlice.actions;

export default userSlice.reducer;


// in other files, when you want to pass in the user state you do the following
// 1. import {useSelector} from "react-redux"
// 2. const user = useSelector((state) => state.user.value)
// When you want to change the state (for example using the login reducer), you need to
// 1. import {useDispatch} from "react-redux"
// 2. const dispatch = useDispatch(login({keys and values of the info you want to change}));
// 3. dispatch()

