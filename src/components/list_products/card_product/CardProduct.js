import "./CardProduct.css"
function CardProduct({name, description, price, id, url}) {
    console.log(id);
    return (
        <div className="card-Product-card">
            <div className="body-card-product">
                <img src={url} alt="muestra"></img>
            </div>
            <div className="title">{name}</div>
            <div className="description">{description}</div>
            <div className="title">{price}</div>
            <div className="foot">
                <a href="/">Agregar</a>
            </div>
        </div>
    )

}
export default CardProduct;