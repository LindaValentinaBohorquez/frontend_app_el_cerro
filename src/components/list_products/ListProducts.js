import CardProduct from './card_product/CardProduct';
import './ListProducts.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetchData';
import { toast } from 'sonner';

function ListProducts({ products }) {
  // Obtén el valor de 'searchProducts' de localStorage
  const searchProductsRaw = localStorage.getItem('searchProducts');

  // Verifica que el valor no sea "undefined" antes de intentar parsearlo como JSON
  const searchProducts = searchProductsRaw && searchProductsRaw !== 'undefined' ? JSON.parse(searchProductsRaw) : [];

  const { tipo } = useParams();
  const { data: typeProducts, loading, error } = useFetch(`http://localhost:8080/AppElCerro/resources/producto/productostipo/${tipo}`);

  // Si hay un error en la petición, muestra un mensaje de error con toast
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
          // Si hay un tipo, muestra los productos cargados por tipo
          loading ? loading : typeProducts && typeProducts?.map(product => (
            <CardProduct
              key={product.id}
              name={product.nombre}
              description={product.descripcion}
              price={product.precio}
              id={product.id}
              img={product.img}
            />
          ))
          :
          searchProducts ?
            // Si hay productos de búsqueda, muéstralos
            searchProducts.map(product => (
              <CardProduct
                key={product.id}
                name={product.nombre}
                description={product.descripcion}
                price={product.precio}
                id={product.id}
                img={product.img}
              />
            ))
            :
            // Si no hay tipo ni productos de búsqueda, muestra los productos propios
            products && products.map(product => (
              <CardProduct
                key={product.id}
                name={product.nombre}
                description={product.descripcion}
                price={product.precio}
                id={product.id}
                img={product.img}
              />
            ))}
      </div>
    </div>
  );
}

export default ListProducts;
