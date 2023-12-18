import { toast } from "sonner";
import useFetch from "../../hooks/useFetchData";
import CardProduct from "./card_product/CardProduct";
import "./ListProducts.css"

function ListProducts() {
    const { data: products, loading, error } = useFetch("http://localhost:40571/AppElCerro/resources/producto/productos");
    if (error != null) {
        toast.error(error);
    }

    return (
        <div className="list-products-title">
            <div className="listp-product-title">
                <h2>Inicio &gt; Lista de productos</h2>
            </div>
            <div className="listp-product-title2">
                <h2>Listado de productos</h2>
            </div>
            <div className="list-grid">
                {loading && <div className="list-products-loading">{loading}</div>}
                {products && products.map(product => {
                    return (
                        <CardProduct
                            key={product.id}
                            name={product.nombre}
                            description={product.descripcion}
                            price={product.precio}
                            id={product.id
                            } url={product.img}
                        />
                    )
                })}
            </div>
        </div>
    )

}

export default ListProducts;