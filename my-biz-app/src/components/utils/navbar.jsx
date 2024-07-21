import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li 
          className="nav-item" 
          onMouseEnter={toggleDropdown} 
          onMouseLeave={toggleDropdown}
        >
          <Link to="#">Inventory</Link>
          {dropdownOpen && (
            <ul className="dropdown">
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/category">Category</Link>
              </li>
              <li>
                <Link to="/supplier">Supplier</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <Link to="/profile">User Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
