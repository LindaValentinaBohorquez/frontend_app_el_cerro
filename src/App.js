import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
