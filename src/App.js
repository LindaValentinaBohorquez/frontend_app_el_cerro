import React from 'react';
import './App.css';
import Bar from './components/shared/bar/Bar';
import Footer from './components/shared/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/landing/Landing';
import ListProducts from './components/list_products/ListProducts';
import Payment from './components/payment/Payment';


function App() {
  const data = {
    "store": "El cerro",
    "address": "Av 0 centro",
    "products": [
      {
        "name": "producto1"
      },
      {
        "name": "producto2"
      },
      {
        "name": "producto3"
      }
    ]
  }
  console.log("fuera", data)
  return (
    <div className="App">
      <Bar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ListProducts />}/>
        <Route path="/payment" element={<Payment />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
