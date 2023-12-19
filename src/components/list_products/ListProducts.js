import CardProduct from './card_product/CardProduct';
import './ListProducts.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetchData';
import { toast } from 'sonner';

function ListProducts({ products }) {
  const searchProducts = JSON.parse(localStorage.getItem('searchProducts'))
  const { tipo } = useParams();
  const { data: typeProducts, loading, error } = useFetch(`http://localhost:40571/AppElCerro/resources/producto/productostipo/${tipo}`);
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
        {tipo ?
          loading ? loading : typeProducts && typeProducts?.map(product => {
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
          })
          :
          searchProducts ?
            searchProducts && searchProducts.map(product => {
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
            })
            :
            products && products.map(product => {
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