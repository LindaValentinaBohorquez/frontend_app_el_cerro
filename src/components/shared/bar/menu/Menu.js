import { Link } from "react-router-dom";
import "./Menu.css"
function Menu() {

    return (
        <div className="menu">
            <nav className="menu-navbar">
                <ul className="menu-items">
                    <li><Link to="/products/Carnes"> Carnes rojas / blancas / de mar </Link></li>
                    <li><Link to="/productsDiscount/2"> Verduras / frutas / vegetales </Link></li>
                    <li><Link to="/products/Huevos,%20lácteos%20y%20derivados"> Huevos, lácteos y derivados </Link></li>
                    <li><Link to="/products/Despensa">Despensa</Link></li>
                    <li><Link to="/products/Bebidas"> Bebidas y licores </Link></li>
                    <li><Link to="/productsDiscount/1"> Panadería </Link></li>
                    <li><Link to="/products/Confiteria"> Confitería </Link></li>
                    <li><Link to="/products/AseoHogar"> Aseo del hogar </Link></li>
                    <li><Link to="/products/AseoPersonal"> Aseo personal </Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;
