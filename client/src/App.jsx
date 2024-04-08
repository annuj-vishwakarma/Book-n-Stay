import React from 'react'
import Login from './Auth/login'
import Register from './Auth/Register'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home/Home';

const App = () => {
  return (
    <>
    <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
     
    </BrowserRouter>
  </>
);
  
}

export default App