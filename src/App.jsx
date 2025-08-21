import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar/Navbar'
import Contact from './Components/Contact'
import Signup from './Components/Create Account/Signup'
import Product from './Components/Product/Product'

const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} /> 
          <Route path="/home" exact element={<Home />} /> 
          <Route path="/about" exact element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/login" element={<Signup/>} /> 
          <Route path="/products" element={<Product/>} /> 
        </Routes>
    </div>

  )
}

export default App
