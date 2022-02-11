import {configureStore, getDefaultMiddleware, isAsyncThunkAction} from "@reduxjs/toolkit";
import carouselReducer from "./carousel";
import logInReducer from './login'
import userReducer from "./user";
import deliveryAddressReducer from "./deliveryAddress";
import productsReducer from "./products"
import orderReducer from "./orders"
import thunkMiddleware from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import deliveryAddress from "./deliveryAddress";

//Create store object to persist in storage
//Key specifies the id of the object and the storage the type of storage used
const persistConfig = {
    key: 'store',
    storage
}

//Combine the reduces
const reducers = combineReducers({carousel: carouselReducer, user: userReducer,
     products: productsReducer, orders: orderReducer, loggedIn: logInReducer, address: deliveryAddressReducer})

//Create a persistent reducer
const persistentReducer = persistReducer(persistConfig, reducers)


//Configure the store
const store = configureStore({
    // Without use of redux persist
    // reducer: {
    //     carousel: carouselReducer,
    //     user: userReducer,
    //     products: productsReducer,
    //     orders: orderReducer
    // },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware)

    reducer: persistentReducer,

    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
});

export default store;