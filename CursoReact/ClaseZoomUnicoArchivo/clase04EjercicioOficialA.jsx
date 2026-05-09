// src/TarjetaProducto.jsx
import { useState } from 'react'; // No olvides importar useState aquí

export function TarjetaProducto({ imagen, nombre, precio }) { 
  // Cada tarjeta crea su propio estado independiente al nacer
  const [favorito, setFavorito] = useState("❤️");

  const cambiarFavorito = () => {
    if (favorito === "❤️") {
      setFavorito("no");
    } else {
      setFavorito("🤍");
    }
  };

  return (
    <div style={{ border: "black solid 2px", padding: "30px", borderRadius: "10px" }}>
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <p style={{ color: 'darkblue' }}>
        Favorito: 
        <button onClick={cambiarFavorito}>
          {favorito}
        </button>
      </p>
    </div>
  );
}
// --------------------------

// src/App.jsx
function App() {
  const datos = [ ... ];

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <TarjetaProducto {...datos[0]} />
      <TarjetaProducto {...datos[1]} />
      <TarjetaProducto {...datos[2]} />
    </div>
  );
}
