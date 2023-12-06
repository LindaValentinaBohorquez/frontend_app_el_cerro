import Search from "./search/Search";
import ShoppingCart from "./shopping_cart/ShoppingCart";
import Menu from "./menu/Menu";
import "./index.css"

function Bar() {
    return (
        <div className="bar">
            <div className="body-bar">
                <img src="https://i.postimg.cc/zG85wrd3/El-Cerro.png" alt="Logo del supermercado El Cerro"></img>
                <Search />
                <ShoppingCart />
            </div>
            <Menu />
        </div>
    )

}

export default Bar;