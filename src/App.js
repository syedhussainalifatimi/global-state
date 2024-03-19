import React from "react";
import Navbar from "./components/navbar/navbar";
import SignUp from "./components/signUp/signUp";
import SignIn from "./components/signIn/signIn";
import Contact from "./components/Contact/contact";
import HomePage from "./components/homepage/homepage";
import Products from "./components/Products/products";
import Cart from "./components/cart/cart";
import { Routes, Route } from "react-router-dom";
import AllFragrances from "./components/Products/fragrances/fragrances all";
import AllPants from "./components/Products/pants/allpants"





function App() {
  return (
    <>
    <Navbar/>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/fragrances" element={<AllFragrances/>}/>
    <Route path="/pants" element={<AllPants/>}/>
    <Route path="/cart" element={<Cart/>}/>
    
   </Routes>
    </>
   
  )
};

export default App;
