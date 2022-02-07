import {Routes, Route, Link, Navigate} from "react-router-dom";
import "./styles/globals.css"
import MainPage from "./containers/MainPage";
import CartPage from "./containers/CartPage";

function App({store}) {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
