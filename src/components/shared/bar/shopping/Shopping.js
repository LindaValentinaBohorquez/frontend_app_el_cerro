import { useEffect, useState } from "react";
import "./Shopping.css"
import ShoppingItem from "./shopping_item/ShoppingItem";
import { Link } from 'react-router-dom';

function Shopping({ isOpen, closeModal }) {
    const [total, setTotal] = useState(0)
    let productsSelect = localStorage.getItem('productsSelected')?.split(";")
    const listProducts = localStorage.getItem('allProducts')
    let productsObj
    if (productsSelect?.length > 0) {
        productsObj = JSON.parse(listProducts)?.filter(objeto => productsSelect?.includes(objeto.id));
    }

    const getTotalValue = () => {
        let productsSeleted = localStorage.getItem('productsSelected')?.split(";")
        if (productsSeleted?.length > 0) {
            let products = []
            for (const prd of productsSeleted) {
                for (const prdList of JSON.parse(listProducts)) {
                    if (parseInt(prdList.id) === parseInt(prd)) {
                        products.push(prdList.precio)
                    }
                }
            }
            if (products?.length > 0) {
                let value = 0
                for (const prd of products) {
                    const price = prd;
                    value += price;
                }
                setTotal(value.toFixed(2))
            } else {
                setTotal(0)
            }
        } else {
            setTotal(0)
        }
    }

    useEffect(() => {
        getTotalValue()
    })

    const goToPayment = () => {
        closeModal();
        localStorage.setItem("Total", total)
    }

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-container">
                <button className="close" onClick={() => closeModal()}>X</button>
                <h1>Tu Carrito</h1>
                {!productsSelect || productsSelect[0] === '' ? <div className="modal-container-zero"><h4>
                    No se han seleccionado productos
                </h4></div> :
                    <div>
                        {productsObj.map(product => {
                            return (
                                <ShoppingItem
                                    key={product.id}
                                    name={product.nombre}
                                    description={product.descripcion}
                                    price={product.precio}
                                    id={product.id}
                                    img={product.img}
                                    getTotalValue={() => getTotalValue()}
                                    quantity={productsSelect.filter(item => parseInt(item) === parseInt(product.id)).length}
                                />
                            )
                        })}
                    </div>
                }
                <div className="shopping-content">
                    <div className="shopping-total">
                        <p><strong>Sub total</strong></p>
                        <p><strong>${" " + new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
                            total,
                        )}</strong></p>
                    </div>
                    <Link to="/payment/step1" className="shopping-link">
                        <button onClick={() => goToPayment() }><strong>Ir a pagar</strong></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Shopping;

