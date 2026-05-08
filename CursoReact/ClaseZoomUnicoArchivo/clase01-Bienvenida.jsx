main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

-----------

App.jsx

import {Bienvenida} from './Bienvenida';

function App(){
  return <Bienvenida /> 
}

export default App

----------

Bienvenida.jsx

export const Bienvenida = () => {
  return (
<h1>¡Bienvenidos al curso de React!</h1>
);  
}
