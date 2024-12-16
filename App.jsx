import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Login from "./components/Login";
import Populer from "./components/Populer";
import About from "./components/About";
import Recomen from "./components/Recomen";
import Produk from "./components/Produk";
import Signup from "./components/Signup";


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<div><Navbar/><Hero/><Login/><Populer/><About/><Recomen/><Produk/></div>} />
      <Route path="/" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  </Router>
   )
};


export default App;