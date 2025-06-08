import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './sidebar.css';

export default function Sidebar() {
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(false);
  const location = useLocation();

  const inventoryTimeout = useRef(null);
  const ordersTimeout = useRef(null);

  const getParentLinkClassName = (basePath) => {
    return location.pathname.startsWith(basePath) ? 'nav-link active' : 'nav-link';
  };

  const getLinkClassName = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleInventoryEnter = () => {
    clearTimeout(inventoryTimeout.current);
    setInventoryOpen(true);
  };
  const handleInventoryLeave = () => {
    inventoryTimeout.current = setTimeout(() => {
      setInventoryOpen(false);
    }, 300);
  };

  const handleOrdersEnter = () => {
    clearTimeout(ordersTimeout.current);
    setOrdersOpen(true);
  };
  const handleOrdersLeave = () => {
    ordersTimeout.current = setTimeout(() => {
      setOrdersOpen(false);
    }, 300);
  };

  return (
    <div className="sidebar">
      <Navbar.Brand as={Link} to="/dashboard" className="text-white text-center d-block mb-4">
        <img
          src="https://placehold.co/150x60/ffffff/000000?text=YourLogo"
          alt="Company Logo"
          style={{ maxWidth: '150px' }}
        />
      </Navbar.Brand>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/dashboard" className={getLinkClassName('/dashboard')}>Dashboard</Nav.Link>

        <div className="menu-wrapper" onMouseLeave={handleInventoryLeave}>
          <div className={getParentLinkClassName('/inventory')} onMouseEnter={handleInventoryEnter}>
            Manage Inventory
          </div>
          {inventoryOpen && (
            <ul className="custom-menu" onMouseEnter={handleInventoryEnter}>
              <li><Link to="/inventory/products" className="custom-menu-item">Products</Link></li>
              <li><Link to="/inventory/categories" className="custom-menu-item">Categories</Link></li>
              <li><Link to="/inventory/suppliers" className="custom-menu-item">Suppliers</Link></li>
            </ul>
          )}
        </div>

        <div className="menu-wrapper" onMouseLeave={handleOrdersLeave}>
          <div className={getParentLinkClassName('/orders')} onMouseEnter={handleOrdersEnter}>
            Manage Orders
          </div>
          {ordersOpen && (
            <ul className="custom-menu" onMouseEnter={handleOrdersEnter}>
              <li><Link to="/orders/customers" className="custom-menu-item">Customers</Link></li>
              <li><Link to="/orders/orders" className="custom-menu-item">Orders</Link></li>
              <li><Link to="/orders/order-history" className="custom-menu-item">Order History</Link></li>
            </ul>
          )}
        </div>

        <Nav.Link as={Link} to="/user-profile" className={getLinkClassName('/user-profile')}>User Profile</Nav.Link>
      </Nav>
    </div>
  );
};
