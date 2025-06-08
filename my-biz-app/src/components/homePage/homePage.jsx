// HomePage
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Dashboard from '../dashboard/dashboard';
import Products from '../features/productComponent/ProductList';
import Categories from '../features/categoryComponent/CategoryList';
import Suppliers from '../features/supplierComponent/SupplierList';
import Orders from '../orderManagement/orderList';
import OrderHistory from '../orderManagement/orderHistory';
import Customers from '../customer/customer';
import UserProfile from '../userProfile/userProfile';

import './homePage.css';
const Home = () => {
    return (
       
             <div className="page-content-wrapper">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/inventory/products" element={<Products />} />
                  <Route path="/inventory/categories" element={<Categories />} />
                  <Route path="/inventory/suppliers" element={<Suppliers />} />
                  <Route path="/orders/customers" element={<Customers />} />
                  <Route path="/orders/orders" element={<Orders />} />
                  <Route path="/orders/order-history" element={<OrderHistory />} />
                  <Route path="/user-profile" element={<UserProfile />} />
                </Routes>
             </div>
    );
};

export default Home;
