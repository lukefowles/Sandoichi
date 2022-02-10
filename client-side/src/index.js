
import "./styles/globals.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import store from "./redux-elements/store";
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

//Configure store object so compatible with PersistGate- which enables persistence of store data
let persistor = persistStore(store);

//STORE -> GLOBALISED STATE

//ACTION -> THE TYPE OF ACTION

//REDUCER -> THE THING THAT UPDATES THE STATE

//DISPATCH -> CALLS THE REDUCER

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
        <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
