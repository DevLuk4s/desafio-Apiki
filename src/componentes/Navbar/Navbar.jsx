import React from 'react';
import logo from '../image/logo-novo.png';
import './Navbar.css';

function Navbar() {
  return (
    <header className="Header">
      <div className="logo"><img src={logo} alt="" /></div>
      <input type="text" className="input" placeholder="Pesquisa..."/>
    </header>
  );
}

export default Navbar;
