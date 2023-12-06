import Search from "./search/Search";
import ShoppingCart from "./shopping_cart/ShoppingCart";
import Menu from "./menu/Menu";

function Bar() {
    return (
        <>
            <h1>esto es el Bar</h1>
            <img src="https://i.postimg.cc/zG85wrd3/El-Cerro.png" alt="Logo del supermercado El Cerro"></img>
            <Search />
            <ShoppingCart />
            <Menu />
        </>
    )

}

export default Bar;