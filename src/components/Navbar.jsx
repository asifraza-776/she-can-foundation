import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <NavLink to="/" className="nav-logo">
          <span className="text-gradient">She Can</span> Foundation
        </NavLink>
        
        <div className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink to="/admin" onClick={() => setIsOpen(false)}>Admin</NavLink>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
