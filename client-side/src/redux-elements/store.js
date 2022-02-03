import {configureStore, getDefaultMiddleware, isAsyncThunkAction} from "@reduxjs/toolkit";
import carouselReducer from "./carousel";
import userReducer from "./user";
import thunkMiddleware from "redux-thunk";

const store = configureStore({
    reducer: {
        carousel: carouselReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware)
});

export default store;