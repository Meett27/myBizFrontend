import { useState } from 'react'
import { Route, Routes, Link } from "react-router-dom";
import Home from './components/homePage/homePage';
import CategoryList from './components/features/categoryComponent/CategoryList';
import ProductList from './components/features/productComponent/ProductList';
import Supplier from './components/features/supplierComponent/SupplierList';
import TopNavbar from './components/utils/navbar';
import Profile from './components/profileComponent/userProfile';

import './App.css'

function App() {


  return (
    <>
    <TopNavbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/category" element={<CategoryList />} />
        <Route path='/product' element={<ProductList />} />
        <Route path='/supplier' element={<Supplier />} />
        <Route path='/myProfile' element={<Profile />} />
      </Routes>
    </>

  )
}

export default App
