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