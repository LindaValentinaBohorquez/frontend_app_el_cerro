import CardProduct from "./card_product/CardProduct";
import "./ListProducts.css"

function ListProducts() {
    const products =  JSON.parse(localStorage.getItem('searchProducts'))

    return (
        <div className="list-products-title">
            <div className="listp-product-title">
                <h2>Inicio &gt; Lista de productos</h2>
            </div>
            <div className="listp-product-title2">
                <h2>Listado de productos</h2>
            </div>
            <div className="list-grid">
                {products && products.map(product => {
                    return (
                        <CardProduct
                            key={product.id}
                            name={product.nombre}
                            description={product.descripcion}
                            price={product.precio}
                            id={product.id} 
                            img={product.img}
                        />
                    )
                })}
            </div>
        </div>
    )

}

export default ListProducts;