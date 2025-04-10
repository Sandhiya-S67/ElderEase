// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container nav-container">
        <div className="logo">
          <Link to="/" className="h1">ElderEase</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/dashboard" className="btn-outline">Sign In</Link></li>
          <li><Link to="/dashboard" className="btn">Sign Up</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;