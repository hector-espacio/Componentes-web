 Documentación Técnica: Sistema de Copiado Híbrido

1. El Problema: Restricción de "Contexto Seguro"
Los navegadores modernos implementan una política de seguridad que restringe el uso de ciertas herramientas (APIs) solo a sitios que consideran seguros.

API afectada: navigator.clipboard.

Requisito: El sitio debe cargarse vía HTTPS o ser localhost.

El fallo en Android: Cuando accedes desde tu celular usando la IP local (http://192.168.0.14), el navegador detecta que es HTTP (no seguro) y, por lo tanto, deshabilita la función de copiar por código para proteger la privacidad del usuario.

2. La Solución: Estrategia de Fallback
Para que el código funcione tanto en Blogger (HTTPS) como en Android Local (HTTP), el script ahora realiza una validación antes de actuar:

Verificación: Revisa si existe navigator.clipboard y si el contexto es seguro (window.isSecureContext).

Ruta A (Moderna): Si el sitio es seguro, usa la API moderna.

Ruta B (Legada/Android): Si el sitio no es seguro, usa el método de "Área de texto invisible".


3. Explicación del Código Agregado
Aquí detallamos qué hace cada parte nueva del JavaScript:

A. La Validación
JavaScript
if (navigator.clipboard && window.isSecureContext) {
    // Caso: Blogger o Localhost PC
} else {
    // Caso: Servidor Android HTTP
}
window.isSecureContext: Es una propiedad booleana que le dice al código si el navegador permite usar funciones premium de seguridad. En tu Android, esto devuelve false.

B. El "Truco" del Textarea Invisible (Para Android)
Cuando la seguridad bloquea el portapapeles, usamos este bloque:

codigo js
// 1. Crear un elemento fantasma
const textArea = document.createElement("textarea");
textArea.value = textToCopy;

// 2. Esconderlo de la vista del usuario
textArea.style.position = "fixed";
textArea.style.left = "-9999px"; 
document.body.appendChild(textArea);

// 3. Simular la acción humana
textArea.focus();
textArea.select();

// 4. Ejecutar el comando antiguo
document.execCommand('copy');

// 5. Eliminar el rastro
document.body.removeChild(textArea);
document.createElement("textarea"): Creamos un cuadro de texto en la memoria del navegador.

style.left = "-9999px": Lo movemos fuera de la pantalla para que el usuario no vea un cuadro de texto saltando de repente.

textArea.select(): Marcamos todo el texto dentro del cuadro, como si hubieras pasado el dedo sobre él.

document.execCommand('copy'): Este es un comando antiguo que todavía funciona en la mayoría de los navegadores para copiar lo que esté "seleccionado" actualmente.

removeChild: Borramos el cuadro de texto para no llenar la memoria del celular.


 

4. Resumen de Funcionamiento





| Entorno              | Método Utilizado     | Razón                                               |
|----------------------|---------------------|-----------------------------------------------------|
| PC (Localhost)       | API Moderna         | Es seguro por ser local.                           |
| Blogger (HTTPS)      | API Moderna         | Es seguro por tener certificado SSL.               |
| Android (IP Local)   |