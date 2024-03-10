import React from "react";
import Navbar from "./components/navbar/navbar";
import Contact from "./components/Contact/contact";
import HomePage from "./components/homepage/homepage";
import Products from "./components/Products/products";
import Cart from "./components/cart/cart";
import { Routes, Route } from "react-router-dom";





function App() {
  return (
    <>
    <Navbar/>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/cart" element={<Cart/>}/>
    
   </Routes>
    </>
   
  )
};

export default App;
