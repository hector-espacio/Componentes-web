import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Importás la lógica que armamos con el vector

// 1. Buscamos el div vacío con id 'root' que está en el index.html
const rootElement = document.getElementById('root');

// 2. Creamos la "raíz" de React en ese lugar
const root = ReactDOM.createRoot(rootElement);

// 3. Ejecutamos la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
