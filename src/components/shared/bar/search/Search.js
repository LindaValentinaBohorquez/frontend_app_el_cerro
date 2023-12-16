import { useState } from "react";
import "./Search.css"

function Search() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

    function searchByString() {
        const listProducts = JSON.parse(localStorage.getItem('allProducts'))
        const results = listProducts.filter(object => {
            const nameMatch = object.nombre.toLowerCase().includes(inputValue.toLowerCase());
            const descriptionMatch = object.descripcion.toLowerCase().includes(inputValue.toLowerCase());
            return nameMatch || descriptionMatch;
        });

        console.log(results);
    }

    return (
        <div className="search">
            <input type="text" placeholder="🔍︎ Buscar Producto..." value={inputValue} onChange={handleInputChange}></input>
            <button onClick={() => searchByString()}><img src="https://i.postimg.cc/MHh7wH9S/lupa1.png" alt="lupa de busqueda"></img></button>
        </div>
    )

}

export default Search;