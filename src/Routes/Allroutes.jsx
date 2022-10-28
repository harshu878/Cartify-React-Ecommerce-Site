import React from 'react'
  import { Routes, Route} from 'react-router-dom';
import Cart from '../components/Cart';
import Home from '../components/Home';
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />

      <Route path="/cart" element={<Cart/>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
    </Routes>
  );
}

export default Allroutes