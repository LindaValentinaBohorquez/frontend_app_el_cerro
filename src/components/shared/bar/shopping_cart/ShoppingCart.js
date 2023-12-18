import "./ShoppingCart.css"

function ShoppingCart({setIsModalOpen}) {
    return (
        <div className="shopping-cart">
            <button onClick={() => setIsModalOpen(true)}><img src="https://i.postimg.cc/SR7z8Rgk/carrito.png" alt="Icono de carrito de compras"></img></button>
        </div>
    );
}

export default ShoppingCart;