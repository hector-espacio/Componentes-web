Casi lo tienes, pero hay una pequeña regla de "gramática" en JavaScript que cambia en el segundo caso.
Aquí tienes la diferencia exacta de cómo se escribe cada una:
### 1. Con default (El que estás usando)
Puedes hacerlo de dos formas, ambas funcionan igual:
 * **Opción A (Al final):**
   ```javascript
   function App() { ... }
   export default App;
   
   ```
 * **Opción B (En la misma línea):**
   ```javascript
   export default function App() { ... }
   
   ```
### 2. Sin default (Exportación Nombrada)
Aquí es donde está el truco. **No puedes poner export App a secas al final.** Tienes que usar llaves o exportar la declaración directamente:
 * **Opción A (En la misma línea - LA MÁS COMÚN):**
   ```javascript
   export function App() { ... }
   
   ```
 * **Opción B (Al final - REQUIERE LLAVES):**
   ```javascript
   function App() { ... }
   export { App }; // Aquí las llaves son obligatorias para exportar
   
   ```
### ¿Por qué la diferencia?
 * **Con default:** Como solo hay uno, JavaScript no necesita nombres. Es como decir: "Toma, llévate esto".
 * **Sin default:** Como podrías exportar 20 funciones distintas, JavaScript te obliga a usar **llaves { }** para crear una lista de lo que estás enviando.
**En resumen:**
Si en tu App.jsx pones export default App, en tu main.jsx lo recibes así:
import App from './App' (Sin llaves, porque es el hijo único).
Si en tu App.jsx pones export function App, en tu main.jsx lo recibes así:
import { App } from './App' (Con llaves, porque es un objeto con nombre).
