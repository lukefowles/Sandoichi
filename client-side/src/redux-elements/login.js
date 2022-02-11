import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn : false
    }

export const logInSlice = createSlice({
    name: "LoggedIn",
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.loggedIn = true;
        },

        logOut: (state, action) => {
            state.loggedIn = false;
        }

    }
});

export const {logIn, logOut} = logInSlice.actions;

export default logInSlice.reducer;