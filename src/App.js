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
      <Bar />
      <Footer />
    </div>
  );
}

export default App;
