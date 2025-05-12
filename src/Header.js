import React from 'react';
// so here the title is missing the prop has no value to correct 
// it i give a value in the paernt componment app.js 
function Header({ title }) {
  return <h1>{title}</h1>; // BUG: Will show nothing if title is undefined
}

export default Header;
