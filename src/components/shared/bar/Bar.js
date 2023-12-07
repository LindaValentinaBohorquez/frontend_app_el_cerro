import Search from "./search/Search";
import ShoppingCart from "./shopping_cart/ShoppingCart";
import Menu from "./menu/Menu";
import "./Bar.css"

function Bar() {
    return (
        <div className="bar">
            <div className="body-bar">
                <ul>
                    <li><a href="/">El Cerro</a></li>
                    <li><a href="/products">Productos</a></li>
                    <li><a href="/payment">Carrito de Compras</a></li>
                </ul>
                <a href="/"><img src="https://i.postimg.cc/zG85wrd3/El-Cerro.png" alt="Logo del supermercado El Cerro"></img></a>
                <Search />
                <ShoppingCart />
            </div>
            <Menu />
        </div>
    )

}

export default Bar;