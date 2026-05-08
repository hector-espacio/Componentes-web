Tienes toda la razón: **tu instinto de programador es correcto**. El código de la imagen está mal escrito y no funcionaría en un proyecto real.
Aquí te explico cómo se hace correctamente para que no haya contradicciones, dependiendo de cómo prefieras escribirlo:
### Opción 1: Exportación por defecto al final (La más común)
Es exactamente como tú dices. Primero defines la constante y al final la exportas. Esta es la forma que permite que el import en el otro archivo sea **sin llaves**.
```javascript
const Bienvenida = () => {
  return <h1>¡Bienvenidos al curso de React!</h1>;
}

export default Bienvenida; // Esto permite import Bienvenida from './Bienvenida'

```
### Opción 2: Exportación por defecto en la misma línea
Para responder a tu duda sobre si es "contradictorio": **No puedes** poner export default const. JavaScript no permite usar const, let o var inmediatamente después de un export default.
Si quieres exportar por defecto al principio, tendrías que usar una función tradicional (sin const):
```javascript
export default function Bienvenida() {
  return <h1>¡Bienvenidos al curso de React!</h1>;
}

```
### Opción 3: Exportación Nombrada (Corrigiendo la imagen)
Si quieres mantener el export const al principio (como en la imagen 1), entonces **estás obligado** a usar llaves en el import (corrigiendo la imagen 2).
 * **Archivo Bienvenida.jsx:**
   ```javascript
   export const Bienvenida = () => { ... }
   
   ```
 * **Archivo App.jsx (El import correcto):**
   ```javascript
   import { Bienvenida } from './Bienvenida'; // ¡Con llaves!
   
   ```
### ¿Por qué la imagen está mal?
Lo más probable es que quien hizo la diapositiva cometió un error de "copiar y pegar". Es muy frecuente ver este error en tutoriales donde mezclan los dos estilos:
 1. Usan export const (Exportación nombrada).
 2. Pero luego enseñan el import como si fuera un export default.
**En resumen:**
 * Si ves export const, necesitas { } en el import.
 * Si ves export default, NO usas { } en el import.
 * **No existe** export default const.
¡Sigue confiando en tu lógica porque detectaste un error técnico real en el material!
