import React from 'react';
import './App.css';
import Bar from './components/shared/bar/Bar';
import Footer from './components/shared/footer/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Landing from './components/landing/Landing';
import ListProducts from './components/list_products/ListProducts';
import Payment from './components/payment/Payment';
import SectionCards from './components/landing/section_cards/SectionCards';

function App() {
  const navigate = useNavigate();

  const redirectToProducts = () => {
    navigate('/products');
  };

  return (
    <div className="App">
      <Bar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ListProducts />} />
        <Route
          path="/SectionCards"
          element={<SectionCards redirectToProducts={redirectToProducts} />}
        />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
