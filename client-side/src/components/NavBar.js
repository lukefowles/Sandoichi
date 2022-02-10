import React from 'react';
import shoppingCart from "../img/img/shopping-cart.png"
import userIcon from "../img/img/outline_person_outline_black_48dp.png"
import {links} from "../data/data"
import {Link} from "react-router-dom"
import {useState, useEffect} from 'react'

function NavBar({changeShowLogin}) {

  const sandwichLink = links[1];
  const homeLink = links[0];

  return <div className='navbar'>
      <nav>
        <a className='nav-item' href={homeLink.url} key={homeLink.id}><h1 >Sandoichi</h1></a>
        <div className="nav-buttons">
        <a className="nav-item" id="nav-start-order" href={sandwichLink.url} key={sandwichLink.id}><h2>Start Order</h2></a>
        {links.map(link => {
          return(
            <a className='nav-item' href={link.url} key={link.id}><h2>{link.text}</h2></a>
          )
        })}
        <button className="nav-item" onClick={changeShowLogin}><img className=".nav-item"src={userIcon} alt="login" width="57"/></button>
        <button className="nav-item"><Link to="/cart" ><img src={shoppingCart} alt="cart" width="50"/></Link></button>
        </div>
      </nav>
  </div>;
}

export default NavBar;
