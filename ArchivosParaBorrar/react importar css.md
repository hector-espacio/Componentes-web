¡Qué buena elección! **Vite** es absurdamente rápido y trabajar con CSS en él es bastante fluido. En React, aunque hay muchas librerías (como Tailwind o Styled Components), las dos formas nativas y más comunes de importar estilos son el **Global CSS** y los **CSS Modules**.
Aquí te explico cómo usarlas:
## 1. Importación Global (Standard CSS)
Esta es la forma tradicional. Creas un archivo .css común y lo importas directamente en tu componente.
 * **Cómo se hace:**
   1. Creas un archivo App.css.
   2. Lo importas en tu archivo .jsx o .tsx: import './App.css';.
 * **Comportamiento:** Los estilos se aplican a **toda la aplicación**. Si defines una clase .button en App.css, afectará a cualquier etiqueta con esa clase en cualquier componente, lo que puede causar conflictos de nombres.
```jsx
// App.jsx
import './App.css';

function App() {
  return <button className="primary-btn">Click me</button>;
}

```
## 2. CSS Modules (Recomendado)
Vite viene con soporte para **CSS Modules** de fábrica. Esta es la opción más profesional porque "encapsula" los estilos: Vite le añade un hash único a tus clases para que no choquen con otros archivos.
 * **Cómo se hace:**
   1. El archivo **debe** terminar en .module.css (ejemplo: Navbar.module.css).
   2. Se importa como un objeto de JavaScript: import styles from './Navbar.module.css';.
 * **Comportamiento:** Accedes a las clases como propiedades de ese objeto styles.
```jsx
// Navbar.jsx
import styles from './Navbar.module.css';

function Navbar() {
  // En el navegador, esto se verá como algo tipo: Navbar_btn__x1y2z
  return <nav className={styles.navbarContainer}>Home</nav>;
}

```
### Tabla Comparativa
| Característica | CSS Global | CSS Modules |
|---|---|---|
| **Extensión** | .css | .module.css |
| **Alcance** | Global (afecta a todo) | Local (encapsulado al componente) |
| **Conflictos** | Riesgo alto de repetir nombres | Imposible que choquen |
| **Uso en JSX** | className="nombre" | className={styles.nombre} |
> **Tip de Pro:** Si necesitas usar varias clases en un CSS Module, puedes usar plantillas de cadena (backticks):
> className={${styles.btn} ${styles.active}}.
> 
¿Cuál de los dos métodos te convence más para tu proyecto actual?
