import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import { CartProvider } from './hooks/useCart';

const App = () => {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
    </CartProvider>
  );
};

export default App;