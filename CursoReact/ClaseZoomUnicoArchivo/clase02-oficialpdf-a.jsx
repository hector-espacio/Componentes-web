App.jsx

import {TarjetaUsuario } from "./TarjetaUsuario";
import {Bienvenida } from "./Bienvenida";

function App() {
return (
<div>
<Bienvenida /> {/* Clase anterior */}
<p>Este es mi primer componente montado en App.jsx</p>
<TarjetaUsuario nombre="Silvia" profesion="Product Owner" />
</div>
);
}
export default App;

--------------------------------------------------
Bienvenida.jsx
export const Bienvenida = () => {
  return (
<h1 style={{ lineHeight: '2.5rem' }}>¡Bienvenidos al curso de React!</h1>
);  
}
---------------------------------------------------

// Componente TarjetaUsuario.jsx
export function TarjetaUsuario(props) {
return (
<div>
<h2>{props.nombre}</h2>
<p>{props.profesion}</p>
</div>
);
}





