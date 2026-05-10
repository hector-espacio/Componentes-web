import { useState } from "react";
import { Contador } from '../Contador/Contador'

function Item({ nombre, precio, stock }) {

    const [esFavorito, setEsFavorito] = useState(false)
   
    const CompraClick = () => {
        // Quiero que se ejecute cuando le doy clic
        alert(`¡Agregaste ${nombre} al chango!`);
    };
    
    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito)
    }

    return (

        <div  style={{ padding: '20px', border: '1px solid black' }}>
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Stock disponible: {stock}</p>
            <Contador />
            <button onClick={CompraClick}>Comprar</button>
            <span
                style={
                    {
                        cursor: "pointer",
                        marginLeft: "10px"
                    }
                }
                onClick={marcarComoFavorito}
            > 
                {esFavorito ? "⭐" : "☆"}
            </span>

        </div>
    );
    //⭐☆
}

export default Item;