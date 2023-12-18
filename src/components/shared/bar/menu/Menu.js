import "./Menu.css"
function Menu() {

    return (
        <div className="menu">
            <nav className="menu-navbar">
                <ul className="menu-items">
                    <li><a href="/products-meats"> Carnes rojas / blancas / de mar </a></li>
                    <li><a href="/products"> Verduras / frutas / vegetales </a></li>
                    <li><a href="/products"> Huevos, lácteos y derivados </a></li>
                    <li><a href="/products"> Despensa </a></li>
                    <li><a href="/products"> Bebidas y licores </a></li>
                    <li><a href="/products"> Panadería </a></li>
                    <li><a href="/products"> Confitería </a></li>
                    <li><a href="/products"> Aseo del hogar </a></li>
                    <li><a href="/products"> Aseo personal </a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu;