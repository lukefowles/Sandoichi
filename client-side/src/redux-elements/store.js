import {configureStore, getDefaultMiddleware, isAsyncThunkAction} from "@reduxjs/toolkit";
import carouselReducer from "./carousel";
import userReducer from "./user";
import productsReducer from "./products"
import orderReducer from "./orders"
import thunkMiddleware from "redux-thunk";

const store = configureStore({
    reducer: {
        carousel: carouselReducer,
        user: userReducer,
        products: productsReducer,
        orders: orderReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware)
});

export default store;