# Reporte Técnico: Solución de Copiado al Portapapeles en Entornos Locales (Android)

## 1. El Problema: Restricción de Contexto Seguro (Secure Context)
Originalmente, el código de copiado utilizaba la API moderna `navigator.clipboard`. Sin embargo, esta función fallaba al ejecutarse desde un servidor local en Android (accediendo mediante una IP como `http://192.168.0.14:8080`).

### ¿Por qué fallaba en Android y no en PC o Blogger?
Los navegadores modernos (Chrome, Edge, Safari) imponen reglas estrictas de seguridad:
* **En Blogger:** Funciona porque utiliza el protocolo **HTTPS**.
* **En PC (Localhost):** Funciona porque los navegadores hacen una excepción con `localhost` y lo consideran seguro por defecto.
* **En Android (IP Local):** Al usar una dirección IP por **HTTP**, el navegador marca el sitio como "No Seguro" y bloquea el acceso al portapapeles por razones de privacidad.

---

## 2. La Solución Planteada: Estrategia de "Fallback" (Respaldo)
Para resolver este problema, se implementó una **Lógica Híbrida**. El script ahora detecta automáticamente si el entorno es seguro o no, eligiendo el mejor método disponible.

### Componentes de la solución:
1.  **Detección de Entorno:** Se utiliza `window.isSecureContext` para saber si el navegador permite las funciones modernas.
2.  **Método Moderno (Ruta A):** Si el entorno es seguro (HTTPS/Localhost), se usa `navigator.clipboard.writeText()`.
3.  **Método de Compatibilidad (Ruta B):** Si el entorno no es seguro (HTTP en Android), se utiliza una técnica de "Inyección Temporal de Elemento".

---

## 3. Explicación del Código JavaScript Agregado

Para solucionar el fallo en Android local, se añadió el siguiente bloque lógico:

### El "Truco" del Textarea Invisible
Cuando la API moderna falla, el script realiza los siguientes pasos:

1.  **Creación Dinámica:** Se crea un elemento `<textarea>` en el DOM que no es visible para el usuario.
2.  **Inyección de Texto:** Se asigna el código que deseamos copiar al valor de ese `textarea`.
3.  **Posicionamiento Fuera de Pantalla:** Se le asigna un estilo `position: fixed` y una coordenada negativa (`left: -9999px`) para que no altere el diseño visual de la página.
4.  **Simulación de Selección:** Se ejecutan los métodos `.focus()` y `.select()` sobre el elemento invisible.
5.  **Ejecución del Comando `copy`:** Se dispara `document.execCommand('copy')`, un comando antiguo pero altamente compatible que no requiere HTTPS.
6.  **Limpieza:** Se elimina el elemento del documento inmediatamente para mantener el HTML limpio.

---

## 4. Comparativa de Funcionamiento

| Escenario | Conexión | Método de Copiado | Estado |
| :--- | :--- | :--- | :--- |
| **PC Local** | `http://localhost` | API Moderna | ✅ Funciona |
| **Blogger** | `https://...` | API Moderna | ✅ Funciona |
| **Android Local** | `http://192.168.x.x` | **Textarea (Fallback)** | ✅ Solucionado |

---
**Nota:** Esta solución garantiza que el botón "Copiar código" sea funcional en cualquier dispositivo, sin importar las restricciones de seguridad del protocolo HTTP.
