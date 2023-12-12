import React, { useState } from 'react';
import './Carrusel.css';

function Carrusel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  return (
    <div className="slider-container">
      <a href="/">
        <img
          src="https://i.postimg.cc/mghjdxfx/2.png"
          alt="img 1"
          className={currentSlide === 0 ? "slide showing" : "slide"}
        />
      </a>
      <a href="/">
        <img
          src="https://i.postimg.cc/QCXk1wky/3.png"
          alt="img 2"
          className={currentSlide === 1 ? "slide showing" : "slide"}
        />
      </a>
      <a href="/">
        <img
          src="https://i.postimg.cc/02y0QgN6/4.png"
          alt="img 3"
          className={currentSlide === 2 ? "slide showing" : "slide"}
        />
      </a>
      <div className="buttons">
        <button className="controls" onClick={previousSlide}>
          &lt;
        </button>
        <button className="controls" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Carrusel;
