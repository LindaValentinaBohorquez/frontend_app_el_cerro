import { toast } from "sonner";
import "./CardProduct.css"

function CardProduct({name, description, price, id, img}) {
    const onClick =() =>{
        const value = localStorage.getItem('productsSelected');
        if(value == null){
            localStorage.setItem('productsSelected',id)
        }
        else{
            localStorage.setItem('productsSelected',value +";"+id)
        }
        toast.success("Se ha agregado el producto.")
    }

    return (
        <div className="card-Product-card">
            <div className="body-card-product">
                <img src={img} alt="muestra"></img>
            </div>
            <div className="title">{name}</div>
            <div className="description">{description}</div>
            <div className="price">$ {price}</div>
            <div className="foot">
                <button onClick={() =>onClick()}>Agregar</button>
            </div>
        </div>
    )

}
export default CardProduct;