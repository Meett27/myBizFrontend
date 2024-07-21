import { useState } from 'react'
import { Route, Routes, Link } from "react-router-dom";
import Home from './components/homePage/homePage';
import CategoryList from './components/categoryComponent/categoryList';
import Product from './components/productComponent/product';
import Supplier from './components/supplierComponent/supplier';
import TopNavbar from './components/utils/navbar';
import Profile from './components/profileComponent\'/userProfile';

import './App.css'

function App() {


  return (
    <>
    <TopNavbar/>
      {/* <nav>
        <ul>

          <li>
            <Link to="/category">Category </Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/category" element={<CategoryList />} />
        <Route path='/product' element={<Product />} />
        <Route path='/supplier' element={<Supplier />} />
        <Route path='/myProfile' element={<Profile />} />
      </Routes>
    </>

  )
}

export default App
