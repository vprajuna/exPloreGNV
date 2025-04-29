import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

function Header() {

  return (
    <nav className="header">
      <Link to="/" className="logo">exPloreGNV</Link>
    </nav>
  );
}

export default Header;