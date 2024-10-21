import React, { useState } from "react";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Cart from "../pages/cart/cart";
import Menu from "../pages/menu/menu";
import Navbar from '../components/navbar.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
