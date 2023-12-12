import "./Search.css"
function Search() {
    return (
        <div class="search">
            <input type="text" placeholder="🔍︎ Buscar Producto..."></input>
            <button><a href="/products"><img src="https://i.postimg.cc/MHh7wH9S/lupa1.png" alt="lupa de busqueda"></img></a></button>
        </div>
    )

}

export default Search;