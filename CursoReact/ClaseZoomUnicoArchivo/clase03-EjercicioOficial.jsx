// estilos: src/index.css
:root {
  --color-primario: #7c3aed;     /* violeta */
  --color-secundario: #1f2937;   /* gris oscuro */
  --color-fondo: #f9fafb;        /* gris claro */
  --color-acento: #f59e0b;       /* amarillo */

  --color-texto: #111827;
  --color-blanco: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

html, body, #root {
  height: 100%;
}

body {
  background-color: var(--color-fondo);
  color: var(--color-texto);
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

.productos-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
  
}

a {
  text-decoration: none;
  color: var(--color-blanco);
}


// script ejecutor react: /src/main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

------------
// Componente Principal: /src/App.jsx

import Layout from "./componentes/Layout/Layout";
import TarjetaProducto from "./componentes/TarjetaProducto/TarjetaProducto";

function App() {
  return (
    <Layout>
      <h2>Productos destacados</h2>

      <div className="productos-container">
        <TarjetaProducto
          imagen="./src/assets/hero.png"
          nombre="Producto 1"
          precio={100}
        />

        <TarjetaProducto
          imagen="./src/assets/hero.png"
          nombre="Producto 2"
          precio={250}
        />

        <TarjetaProducto
          imagen="./src/assets/hero.png"
          nombre="Producto 3"
          precio={300}
        />
      </div>
    </Layout>
  );
}

export default App;
--------------------

// Componentes: /src/componentes/Layout/Layout.jsx

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout({ children }) {
    return (
        <div className="app">
            <Header />
            <main className="container">
                {children}
            </main>
            <Footer />
        </div>
    );
} 

const styles = {
    
}

export default Layout;
------------------------
// Componentes: /src/componentes/Layout/Header/Header.jsx

export default function Header() {
  return (
    <header style={styles.header}>
      <h1>Tienda React</h1>

      <nav>
        <ul style={styles.navList}>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Carrito</a></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "var(--color-primario)",
    color: "var(--color-blanco)",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  navList: {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    gap: "15px"
  }
};
----------
// Componentes: /src/componentes/Layout/Footer/Footer.jsx

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2026 Tienda React</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "var(--color-secundario)",
    color: "var(--color-blanco)",
    textAlign: "center",
    padding: "15px"
  }
};

--------
// Componentes: /src/componentes/TarjetaProducto/TarjetaProducto.jsx

import styles from "./TarjetaProducto.module.css";

export default function TarjetaProducto({ imagen, nombre, precio }) {
  return (
    <div className={styles.card}>
      <img src={imagen} alt={nombre} className={styles.image} />
      <h3>{nombre}</h3>
      <p className={styles.price}>${precio}</p>
    </div>
  );
}
--------
// Componentes: /src/componentes/TarjetaProducto/TarjetaProducto.module.css

.card {
  background: var(--color-blanco);
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

.image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.price {
  color: var(--color-acento);
  font-weight: bold;
  margin-top: 10px;
}
