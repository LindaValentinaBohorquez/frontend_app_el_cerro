import { useState } from "react";
import "./ShoppingItem.css"

function ShoppingItem({ name, description, price, id, img, quantity, getTotalValue }) {
    const [quantityProduct, setQuantityProduct] = useState(quantity);
    const plus = () => {
        const value = localStorage.getItem('productsSelected');
        if(value == null || value?.length === 0){
            localStorage.setItem('productsSelected',id)
        }
        else{
            localStorage.setItem('productsSelected',value +";"+id)
        }
        setQuantityProduct(quantityProduct + 1)
        getTotalValue()
    }
    const trash = () => {
        if (quantityProduct === 0) {
            console.log("esto se debe eliminar del carrito")
        } else {
            const value = localStorage.getItem('productsSelected')?.split(";");
            let listProducts = deleteCoincidenci(value,id)
            console.log(listProducts)
            localStorage.setItem('productsSelected',listProducts.join(";"))
            setQuantityProduct(quantityProduct - 1)
        }
        getTotalValue()
    }
    function deleteCoincidenci(array, id) {
        const arrayClonado = [...array];
        const index = arrayClonado.indexOf(id);
        if (index !== -1) {
            arrayClonado.splice(index, 1);
        }
        return arrayClonado;
      }
      
    return (
        <div className="shopping-item">
            <div className="shopping-item-url">
                <img src={img} alt={description}></img>
            </div>
            <div>
                <div className="shopping-item-name">
                    {name}
                </div>
                <div className="shopping-item-price">
                    {price}
                </div>
                <div className="shopping-item-edit">
                    <div className="shopping-item-button-trash">
                        <button onClick={() => trash()}><img src="https://i.postimg.cc/5yStQYWZ/trash.png" alt="Icono de Borrar"></img></button>
                    </div>
                    <div className="shopping-item-quatity">
                        {quantityProduct}
                    </div>
                    <div className="shopping-item-button-plus">
                        <button onClick={() => plus()}><img src="https://i.postimg.cc/cLNV59YM/plus.png" alt="Icono de Borrar"></img></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingItem;