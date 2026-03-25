# 📘 Documentación Técnica: Sistema de Copiado Híbrido (Android Local & Blogger)

Esta guía explica la solución técnica implementada para que el botón de "Copiar Código" funcione en servidores locales de Android (HTTP) y en plataformas de producción como Blogger (HTTPS).

---

## 1. El Problema: Restricción de "Contexto Seguro"

El código original fallaba en Android debido a una directiva de seguridad de los navegadores modernos. La API `navigator.clipboard` solo está habilitada en **Contextos Seguros**.

### 📊 Comparativa de Entornos y Compatibilidad
| Entorno | Protocolo / URL | ¿Es Seguro? | Funciona JS Original |
| :--- | :--- | :--- | :--- |
| **Blogger** | `https://tu-sitio.com` | **SÍ** (SSL) | ✅ SÍ |
| **PC Local** | `http://localhost:8080` | **SÍ** (Excepción) | ✅ SÍ |
| **Android Local** | `http://192.168.0.14:8080` | **NO** (IP Privada) | ❌ NO |
| **Archivo Local** | `file:///sdcard/index.html` | **NO** (Sin Servidor) | ❌ NO |

**Diagnóstico:** En tu servidor de Android, al acceder por una IP (`192.168.x.x`) mediante `http`, el navegador bloquea el acceso al portapapeles por considerarlo un riesgo de seguridad.

---

## 2. La Solución: Estrategia de Fallback (Respaldo)

Para solucionar esto, se modificó el JavaScript para que detecte el entorno. Si el navegador bloquea la vía moderna, el script activa automáticamente un **"Plan B"** que no depende de HTTPS.

### 🛠️ Bloque de Código JavaScript Corregido
```javascript
function copyCode(buttonElement) {
    const container = buttonElement.closest('.code-block-container');
    const codeBlock = container.querySelector('.code-content');
    const textToCopy = codeBlock.innerText.trim();

    const showSuccess = () => {
        const originalText = buttonElement.innerText;
        buttonElement.innerText = "¡Copiado!";
        buttonElement.style.color = "#3fb950";
        setTimeout(() => {
            buttonElement.innerText = originalText;
            buttonElement.style.color = "";
        }, 2000);
    };

    // --- LÓGICA DE DETECCIÓN ---
    if (navigator.clipboard && window.isSecureContext) {
        // MÉTODO MODERNO (Para Blogger/PC)
        navigator.clipboard.writeText(textToCopy).then(showSuccess);
    } else {
        // MÉTODO DE RESPALDO (Para Android Local HTTP)
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        
        // Lo posicionamos fuera de la pantalla
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        
        // Forzamos el foco y la selección manual por código
        textArea.focus();
        textArea.select();

        try {
            // Ejecutamos el comando de copiado clásico del sistema
            const successful = document.execCommand('copy');
            if (successful) showSuccess();
        } catch (err) {
            console.error('Error al copiar en Android:', err);
        }

        // Eliminamos el rastro del DOM
        document.body.removeChild(textArea);
    }
}
```

### 3. Funcionamiento Interno en Android Local

Cuando ejecutas el código en tu servidor de Android (HTTP), el script realiza los siguientes pasos técnicos para evadir la restricción de seguridad:

* **Inyección Dinámica:** El script crea un elemento HTML `<textarea>` en tiempo de ejecución que no existe originalmente en el diseño.
* **Ocultamiento por Coordenadas:** Utiliza `style.left = "-9999px"`. El elemento existe físicamente en la página para que el sistema lo reconozca, pero queda fuera del campo de visión del usuario.
* **Simulación de Interacción:** * `textArea.focus()`: Pone el foco del sistema en el cuadro oculto.
    * `textArea.select()`: Selecciona todo el texto dentro del cuadro. Android requiere que el texto esté "marcado" para permitir el copiado en contextos no seguros.
* **Ejecución de Comando:** Llama a `document.execCommand('copy')`. Este es un comando de legado que los navegadores móviles aún permiten bajo HTTP porque interpretan que hay una selección de texto activa.
* **Recolección de Basura:** Se usa `document.body.removeChild(textArea)` para eliminar el elemento temporal de la memoria del celular inmediatamente después de copiar.
