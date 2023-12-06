import React, {useState, useEffect} from 'react';
import Tabla from './Tabla';
import Axios from 'axios';

const CrudSitios = () => {
    const[list, setList] = useState([]);
    useEffect ( () => {
        const mostrar= async () => {
            try {
                const respuesta = await Axios({
                    url: "http://localhost:40571/TurismoApp/resource/destino/destinos"
                });
                setList (respuesta.data)

            } catch(error){
                console.log(error)
            }
        }; 
        mostrar();
    }

    )
    return (
        <div>
            <CardProducto data={list}/>
        </div>
    );
}