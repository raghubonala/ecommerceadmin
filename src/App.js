import React from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import "./App.css"
import AddProduct from './components/AddProduct'
import ShowProduct from './components/ShowProduct'
import Admin from './components/Admin'
import SingleProduct from './components/SingleProduct'
import EditProduct from './components/EditProduct'
const App = () => {
  return (
    <Router>
      <Navbar/>
     <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path="/add-product" element={<AddProduct/>}/>
      <Route path="/show-product" element={<ShowProduct/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/show-single-product/:id" element={<SingleProduct/>}/>
      <Route path="/single-product-edit/:id" element={<EditProduct/>}/>
     </Routes>
    </Router>
  )
}

export default App