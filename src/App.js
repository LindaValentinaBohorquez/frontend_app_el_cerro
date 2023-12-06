import React from 'react';
import './App.css';
import Bar from './components/shared/bar';
import Footer from './components/shared/footer';

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
  console.log("fuera",data)
  return (
    <div className="App">
      <h1>hola valen y maria </h1>
      <Bar />
      <Footer />
    </div>
  );
}

export default App;
