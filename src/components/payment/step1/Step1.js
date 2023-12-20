import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Step1.css"
import ShoppingItem from "../../shared/bar/shopping/shopping_item/ShoppingItem";

const Step1 = () => {
    const [total, setTotal] = useState(0)
    let productsSelect = localStorage.getItem('productsSelected')?.split(";")
    const listProducts = localStorage.getItem('allProducts')
    let productsObj
    if (productsSelect?.length > 0) {
        productsObj = JSON.parse(listProducts)?.filter(objeto => productsSelect?.includes(objeto.id));
    }

    const navigate = useNavigate();

    const handleIconClick = () => {
        navigate("/payment/step1");
    };

    const handleNextClick = () => {
        navigate("/payment/step2");
    };

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

    return (
        <div className="step1-title">
            <div className="step1-title">
                <h2>Inicio &gt; Proceso de pago &gt; <span style={{ backgroundColor: 'white', color: 'black' }}>Step1</span></h2>
            </div>
            <div className="step1-title2">
                <h2>Carrito de compras</h2>
            </div>
            <div className="icons">
                <button onClick={handleIconClick} className="icon-button">
                    <div className="icon-background">
                        <img src="https://i.postimg.cc/fRym7QLT/carrito-de-compras.png" alt="Carrito" />
                    </div>
                </button>
                <span className="arrow">→</span>
                <img src="https://i.postimg.cc/qRxWQvD2/usuario.png" alt="Usuario" />
                <span className="arrow">→</span>
                <img src="https://i.postimg.cc/YSrpHTcN/mano.png" alt="Mano" />
            </div>
            <div className="step1-list-products">
                <h2>Lista de compras</h2>
                <div className="step1-title1">
                    <div>
                        {productsObj && productsObj.map(product => {
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
                    <div className="total-and-button">
                        <h2>Total: ${" " + new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
                            total,
                        )}</h2>
                        <button onClick={handleNextClick} className="next-step-button">Continuar con la compra</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step1;
