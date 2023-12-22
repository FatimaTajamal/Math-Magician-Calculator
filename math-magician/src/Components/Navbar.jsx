import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Math Magicians</div>
      <div className="nav-links">
      <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quotes">Quotes</Link>
      </div>
    </nav>
  );
};

export default Navbar;