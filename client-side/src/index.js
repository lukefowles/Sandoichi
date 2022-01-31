import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import userReducer from "./features/user"
import {configureStore} from "@reduxjs/toolkit";

//STORE -> GLOBALISED STATE
let store = configureStore({
  reducer: {userReducer,}
})

//ACTION -> THE TYPE OF ACTION

//REDUCER -> THE THING THAT UPDATES THE STATE

//DISPATCH -> CALLS THE REDUCER

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
