import React from 'react';
import './App.css';
import Bar from './components/shared/bar/Bar';
import Footer from './components/shared/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/landing/Landing';
import ListProducts from './components/list_products/ListProducts';
import Step1 from './components/payment/step1/Step1';
import Step2 from './components/payment/step2/Step2';
import Step3 from './components/payment/step3/Step3';
import Payment from './components/payment/Payment';
import SectionCards from './components/landing/section_cards/SectionCards';
import { Toaster, toast } from 'sonner';
import useFetch from './hooks/useFetchData';

function App() {
  const { data: products, error } = useFetch("http://localhost:40571/AppElCerro/resources/producto/productos");
  if (error != null) {
    toast.error(error);
  }
  localStorage.setItem('allProducts', JSON.stringify(data));

  return (
    <div className="App">
      {loading ?
        <div>
          Loading ...
        </div>
        :
        <div>
          <Toaster />
          <Bar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/products" element={<ListProducts products={products} />} />
            <Route path="/products/:tipo" element={<ListProducts products={products} />} />
            <Route path="/SectionCards" element={<SectionCards />} />
            <Route path="/payment/step1" element={<Step1 />} />
            <Route path="/payment/step2" element={<Step2 />} />
            <Route path="/payment/step3" element={<Step3 />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Footer />
        </div>
      }
    </div>
  );
}

export default App;
