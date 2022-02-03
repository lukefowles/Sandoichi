import React from 'react';
import shoppingCart from "../img/img/shopping-cart.png"
import userIcon from "../img/img/outline_person_outline_black_48dp.png"

function NavBar() {
  return <div className='navbar'>
      <nav>
        <h1 className=".nav-item">Sandoichi</h1>
        <div className="nav-buttons">
        <h2 className=".nav-item"><img src={userIcon} alt="login" width="57"/></h2>
        <h2 className=".nav-item"><img src={shoppingCart} alt="cart" width="50"/></h2>
        </div>
      </nav>
  </div>;
}

export default NavBar;
