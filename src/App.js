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

  const data = [
    {
      cantidad: 20,
      descripcion: "Para desinfección y limpieza.",
      id: "0",
      nombre: "Cloro",
      precio: 2.1,
      tipo: "Aseo Hogar",
      url: "https://i.postimg.cc/cCgv6hwg/1.png"
    },
    {
      cantidad: 20,
      descripcion: "Pechuga de pollo, 1 KG.",
      id: "1",
      nombre: "Pollo",
      precio: 16.700,
      tipo: "Carne Blanca",
      url: "https://i.postimg.cc/8CZcH9bf/2.png"
    },
    {
      cantidad: 50,
      descripcion: "Doritos Clásicos, 200 gm.",
      id: "10",
      nombre: "Doritos",
      precio: 4.600,
      tipo: "Paquetes",
      url: "https://i.postimg.cc/HnyLTx1b/3.png"
    },
    {
      cantidad: 65,
      descripcion: "Unidad",
      id: "11",
      nombre: "Manzana Verde",
      precio: 2.680,
      tipo: "Frutas",
      url: "https://i.postimg.cc/9XrJHqzs/4.png"
    },
    {
      cantidad: 30,
      descripcion: "Unidad",
      id: "12",
      nombre: "Tomate",
      precio: 1.200,
      tipo: "Verdura",
      url: "https://i.postimg.cc/xjhgfTz8/5.png"
    },
    {
      cantidad: 102,
      descripcion: "Azúcar blanco, 2500 gr",
      id: "13",
      nombre: "Azúcar",
      precio: 10.490,
      tipo: "Despensa",
      url: "https://i.postimg.cc/xTm5cDvR/6.png"
    },
    {
      cantidad: 80,
      descripcion: "Cartón de huevos, 30 und.",
      id: "14",
      nombre: "Huevos",
      precio: 17.990,
      tipo: "Despensa",
      url: "https://i.postimg.cc/g2PDhS4P/7.png"
    },
    {
      cantidad: 120,
      descripcion: "Lomo Aceite, 170 gr.",
      id: "15",
      nombre: "Atún",
      precio: 4.990,
      tipo: "Despensa",
      url: "https://i.postimg.cc/y8XTymr3/8.png"
    },
    {
      cantidad: 50,
      descripcion: "Pan Tajado Blanco, 730 gr.",
      id: "16",
      nombre: "Pan Tajado",
      precio: 7.200,
      tipo: "Panadería",
      url: "https://i.postimg.cc/XvjkHrTH/9.png"
    },
    {
      cantidad: 100,
      descripcion: "24 und, sabor a fresa, 456 gm.",
      id: "17",
      nombre: "Bon Bon Bum",
      precio: 7.490,
      tipo: "Confitería",
      url: "https://i.postimg.cc/yY0h7hKp/10.png"
    },
    {
      cantidad: 46,
      descripcion: "Jabón Líquido con fragancia a Coco.",
      id: "18",
      nombre: "Jabón Líquido",
      precio: 13.600,
      tipo: "Aseo Personal",
      url: "https://i.postimg.cc/cLZRCK4x/11.png"
    },
    {
      cantidad: 20,
      descripcion: "Tortillas Clásicas, 450 gr.",
      id: "2",
      nombre: "Tortillas",
      precio: 12.990,
      tipo: "Panadería",
      url: "https://i.postimg.cc/FHZjL97j/12.png"
    },
    {
      cantidad: 30,
      descripcion: "Producto cosmético, detergente, limpia el cabello y cuero cabelludo.",
      id: "3",
      nombre: "Shampoo",
      precio: 12.990,
      tipo: "Aseo Personal",
      url: "https://i.postimg.cc/W4Yg5Xmz/13.png"
    },
    {
      cantidad: 18,
      descripcion: "Tilapia Roja",
      id: "4",
      nombre: "Pescado",
      precio: 17.990,
      tipo: "Carne De Mar",
      url: "https://i.postimg.cc/DfXLcQSf/14.png"
    },
    {
      cantidad: 20,
      descripcion: "Filetes de Res",
      id: "5",
      nombre: "Carne",
      precio: 17.990,
      tipo: "Carne Roja",
      url: "https://i.postimg.cc/HkByLBhz/15.png"
    },
    {
      cantidad: 60,
      descripcion: "Detergente tamaño estándar.",
      id: "6",
      nombre: "Detergente Para Ropa",
      precio: 10.990,
      tipo: "Aseo Hogar",
      url: "https://i.postimg.cc/GptsTv0C/16.png"
    },
    {
      cantidad: 16,
      descripcion: "Suavizante olor lavanda",
      id: "7",
      nombre: "Suavizante Para Ropa",
      precio: 8.799,
      tipo: "Aseo Hogar",
      url: "https://i.postimg.cc/0jR643zk/17.png"
    },
    {
      cantidad: 20,
      descripcion: "Cartón de leche entera",
      id: "8",
      nombre: "Leche",
      precio: 2.899,
      tipo: "Lácteo",
      url: "https://i.postimg.cc/zXkLdx8N/18.png"
    },
    {
      cantidad: 80,
      descripcion: "Gaseosa Coca-Cola tamaño familiar, 6000 ml.",
      id: "9",
      nombre: "Coca-Cola",
      precio: 9.500,
      tipo: "Gaseosa",
      url: "https://i.postimg.cc/0y2zh7yw/19.png"
    }
  ]
  localStorage.setItem('allProducts', data);

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
