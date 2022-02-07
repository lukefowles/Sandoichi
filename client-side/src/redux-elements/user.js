import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {value: {}},
    reducers: {
        login: (state) => {

        },
        logout: (state) => {

        }
    }
});

export default userSlice.reducer;


// in other files, when you want to pass in the user state you do the following
// 1. import {useSelector} from "react-redux"
// 2. const user = useSelector((state) => state.user.value)
// When you want to change the state (for example using the login reducer), you need to
// 1. import {useDispatch} from "react-redux"
// 2. const dispatch = useDispatch(login({keys and values of the info you want to change}));
// 3. dispatch()

