// ShoppingCart.js
import React from 'react';

function ShoppingCart() {
    return (
        <div className="shopping-cart">
            <a href="/"><img src="https://i.postimg.cc/SR7z8Rgk/carrito.png" alt="Icono de carrito de compras"></img></a>
            <span className="item-count">0</span>
        </div>
    );
}

export default ShoppingCart;