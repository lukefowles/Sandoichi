import React from 'react';
import shoppingCart from "../img/img/shopping-cart.png"
import userIcon from "../img/img/outline_person_outline_black_48dp.png"
import {links} from "../data/data"

function NavBar() {

  const sandwichLink = links[1];
  const homeLink = links[0];

  return <div className='navbar'>
      <nav>
        <a className='nav-item' href={homeLink.url} key={homeLink.id}><h1 >Sandoichi</h1></a>
        <div className="nav-buttons">
        <button className="nav-item"><a href={sandwichLink.url} key={sandwichLink.id}><h2>Start Order</h2></a></button>
        <button className="nav-item"><img className=".nav-item"src={userIcon} alt="login" width="57"/></button>
        <button className="nav-item"><img src={shoppingCart} alt="cart" width="50"/></button>
        </div>
      </nav>
  </div>;
}

export default NavBar;
