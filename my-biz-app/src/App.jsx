import { useState } from 'react'
import { Route, Routes, Link } from "react-router-dom";
import Sidebar from './components/utils/sidebar';
import Home from './components/homePage/homePage';
import Header from './components/utils/header';
import Footer from './components/utils/footer';
import './App.css'

function App() {


  return (
    <div className="app-container">
        <Sidebar />
        <main className="main-content" role="main">
            <Header />
             <Home />
             <Footer />
        </main>
    </div>

  )
}

export default App
