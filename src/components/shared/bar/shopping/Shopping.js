import "./Shopping.css"
import ShoppingItem from "./shopping_item/ShoppingItem";
import { Link } from 'react-router-dom';

function Shopping({ isOpen, closeModal }) {
    const productsSelect = localStorage.getItem('productsSelected')?.split(";")
    console.log(productsSelect)
    if (!isOpen) return null;
    return (
        <div className="modal">
            <div className="modal-container">
                <h1>Tu Carrito</h1>
                <button className="close" onClick={() => closeModal()}>X</button>
                <ShoppingItem />
                <p>Total</p>
                <p>$200</p>
                <Link to="/payment/step1">
                    <button onClick={() => closeModal()}>Ir a pagar</button>
                </Link>
            </div>
        </div>
    )
}

export default Shopping;

