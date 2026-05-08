main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
-------------
app.jsx

import {Encabezado} from "./Encabezado.jsx";
import {CuerpoPosteo} from "./CuerpoPosteo.jsx";
import {PieDePosteo} from "./PieDePosteo.jsx";

function App() {
  return (
    <div>
      <Encabezado />
      <CuerpoPosteo />
      <PieDePosteo />
    </div>
  );
}

export default App;
-------------

Encabezado.jsx
export function Encabezado() {
  return (
    <header>
      <h1>Mi Primer Posteo con React</h1>
    </header>
  );
}
------------

CuerpoPosteo.jsx
export function CuerpoPosteo() {
  return (
    <main>
      <p>
        Este es el cuerpo de mi posteo. Aprendiendo a usar componentes 
        con funciones tradicionales.
      </p>
    </main>
  );
}

----------
PieDePosteo.jsx
export function PieDePosteo() {
  return (
    <footer>
      <hr />
      <p>Pie de página del posteo - Clase 01 ok</p>
    </footer>
  );
}

