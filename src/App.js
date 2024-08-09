import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/pages/home';
import Shop from './components/pages/shop';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Journal from './components/pages/journal';
import Register from './components/pages/signup';
import Login from './components/pages/login';
import Product from './components/pages/productpage';
import Payments from './components/pages/payment';

function Main() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/signup' || location.pathname === '/login';

  return (
    <div>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/payment" element={<Payments />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
