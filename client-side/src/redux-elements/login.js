import { createSlice } from "@reduxjs/toolkit";

export const logInSlice = createSlice({
    name: "LoggedIn",
    initialState: {loggedIn: false},
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