src/Saludo.jsx

export function Saludo() {
  return (
    <div>
      <h2>Hola desde el Subcomponente</h2>
    </div>
  )
}
‐--‐----------------------------------
src/App.jsx

import {Saludo} from './Saludo.jsx'

function App(){
return (
<main>
<h1>Aplicacion Principal</h1>
<Saludo />
</main>
)
}
export default App
‐--‐----------------------------------

src/main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
 </StrictMode>,
)
