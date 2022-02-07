import React from 'react';
import {links} from "../data/data"

function StartOrderButton() {

    const sandwichLink = links[1];

  return (<div className='start-order'>
      <button><a href={sandwichLink.url} key={sandwichLink.id}><h2>Start your order now</h2></a></button>
  </div>);
}

export default StartOrderButton;
