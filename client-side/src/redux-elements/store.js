import {configureStore, getDefaultMiddleware, isAsyncThunkAction} from "@reduxjs/toolkit";
import carouselReducer from "./carousel";
import userReducer from "./user";
import productsReducer from "./products"
import thunkMiddleware from "redux-thunk";

const store = configureStore({
    reducer: {
        carousel: carouselReducer,
        user: userReducer,
        products: productsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware)
});

export default store;