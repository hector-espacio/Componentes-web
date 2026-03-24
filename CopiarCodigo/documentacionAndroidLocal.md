
Copiar Código: Local vs. Blogger
https://gemini.google.com/share/0370c720395a
Creado con Rápido 24 de marzo de 2026, 14:51
Fecha de publicación: 24 de marzo de 2026, 15:08
Has dicho
Porque este codigo funciona en bloger y no en local eso que uso android servidor html



<style>


/* Contenedor principal del código */

.code-block-container {

width: 100%;

max-width: 650px;

border: 1px solid #30363d;

border-radius: 6px;

overflow: hidden;

background-color: #f0f4f9;

/* --- AQUÍ ESTÁ LA SOLUCIÓN --- */

margin: 20px 0; /* Separa los bloques arriba y abajo, pero limpia los lados */

padding: 0; /* Elimina el padding interno que traen algunos navegadores */

box-sizing: border-box; /* Asegura que el borde no ensanche la caja */

}



/* Barra superior (Cabecera) - Figcaption */

.code-header {

display: flex;

justify-content: space-between;

align-items: center;

padding: 8px 16px;

background-color: #f0f4f9; /* Corregido el ## que tenías */

border-bottom: 1px solid #30363d;

font-size: 14px;

color: #444746;

font-weight: 500;

margin: 0; /* Asegura que no tenga márgenes propios */

}





/* El botón de copiar */

.copy-button {

background: none;

border: none;

color: #444746;

cursor: pointer;

font-size: 14px;

display: flex;

align-items: center;

gap: 5px;

transition: color 0.2s;

}



.copy-button:hover {

color: #58a6ff;

}



/* Área del texto/código - Pre */

.code-content {

margin: 0 !important; /* El !important fuerza a quitar el margen de 'pre' */

padding: 18px;

overflow-x: auto;

font-family: 'ui-monospace', 'SFMono-Regular', 'SF Mono', Menlo, Consolas, monospace;

font-size: 14px;

line-height: 1.45;

color: #444746;

font-weight: 500;

white-space: pre;

box-sizing: border-box;

}



</style>



<figure class="code-block-container">



<figcaption class="code-header">

<span>html/css/js</span>

<button class="copy-button" onclick="copyCode(this)">Copiar codigo</button>

</figcaption>



<pre class="code-content" id="code-text">

hola mundo aqui 1

</pre>



</figure>



<figure class="code-block-container">



<figcaption class="code-header">

<span>html/css/js</span>

<button class="copy-button" onclick="copyCode(this)">Copiar codigo</button>

</figcaption>



<pre class="code-content" id="code-text">

hola mundo aqui 2

</pre>



</figure>





<script>

function copyCode(buttonElement) {

// 1. Buscamos el contenedor 'figure' más cercano al botón que pulsaste

const container = buttonElement.closest('.code-block-container');


// 2. Dentro de ESE contenedor, buscamos el bloque de texto

const codeBlock = container.querySelector('.code-content');


// 3. Obtenemos el texto (limpiando espacios extra al inicio y final)

const textToCopy = codeBlock.innerText.trim();



// 4. Proceso de copiado al portapapeles

navigator.clipboard.writeText(textToCopy).then(() => {

// Guardamos el texto original para restaurarlo luego

const originalText = buttonElement.innerText;


// Feedback visual inmediato

buttonElement.innerText = "Copiado!";

buttonElement.style.color = "#3fb950"; // Verde éxito



// Volver al estado normal después de 2 segundos

setTimeout(() => {

buttonElement.innerText = originalText;

buttonElement.style.color = ""; // Vuelve al color original del CSS

}, 2000);

}).catch(err => {

console.error('Error al copiar el código:', err);

});

}

</script>





Osea no puedo copiar el codigo local pero en bloger el codigo si sirve

El problema no es tu código, sino una restricción de seguridad de los navegadores modernos (como Chrome en Android) cuando usas una conexión HTTP en lugar de HTTPS.

¿Por qué pasa esto?
La función navigator.clipboard (la que usas para copiar) es considerada una "característica potente" que solo funciona en Contextos Seguros.

En Blogger: Tu blog probablemente carga bajo https://nombre.blogspot.com. Al ser HTTPS, el navegador permite que el script acceda al portapapeles.

En Local (Android): Como se ve en tu captura, estás accediendo a través de http://192.168.0.14:8080. Al ser HTTP (sin la "S"), el navegador bloquea el acceso al portapapeles por seguridad, para evitar que sitios maliciosos roben o inyecten datos en tu celular sin que te des cuenta.

La Solución: El "Plan B" (Fallback)
Para que funcione tanto en local como en tu blog, debes agregar un método antiguo que no requiere HTTPS (document.execCommand('copy')) si el método moderno falla.

Reemplaza tu función <script> por esta:

JavaScript
function copyCode(buttonElement) {
    const container = buttonElement.closest('.code-block-container');
    const codeBlock = container.querySelector('.code-content');
    const textToCopy = codeBlock.innerText.trim();

    // Función para dar feedback visual (éxito)
    const showSuccess = () => {
        const originalText = buttonElement.innerText;
        buttonElement.innerText = "¡Copiado!";
        buttonElement.style.color = "#3fb950";
        setTimeout(() => {
            buttonElement.innerText = originalText;
            buttonElement.style.color = "";
        }, 2000);
    };

    // 1. Intentar con la API moderna (requiere HTTPS)
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy)
            .then(showSuccess)
            .catch(err => console.error('Error:', err));
    } else {
        // 2. "Plan B" para HTTP (Local): Usar un textarea invisible
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        
        // Asegurar que no se vea en pantalla
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            if (successful) showSuccess();
        } catch (err) {
            alert('No se pudo copiar, intenta manualmente.');
        }

        document.body.removeChild(textArea);
    }
}
¿Qué hace este cambio?
Verifica el contexto: Si detecta que no estás en un sitio seguro (como tu IP local), crea un cuadro de texto invisible detrás de escenas.

Simula la selección: Pega el código ahí, lo selecciona y ejecuta el comando de copiado "clásico".

Limpia: Borra ese cuadro invisible inmediatamente.

Con este cambio, el botón debería funcionar perfectamente en tu servidor de Android. ¿Te gustaría que te ayude a ajustar algo más del diseño visual?

Has dicho
Osea el codigo servia local en pc pero no en android

¡Exacto! Tienes toda la razón en notar esa diferencia. Lo que sucede es que los navegadores tratan a PC (localhost) y Android (IP de red) de forma distinta por una regla de seguridad específica.

La regla del "Contexto Seguro"
Los navegadores modernos (Chrome, Edge, Safari) bloquean funciones sensibles como el portapapeles (navigator.clipboard) a menos que la conexión sea segura.

Aquí está el "truco" de por qué en tu PC sí funcionaba y en Android no:

Dispositivo	Dirección (URL)	¿Es Seguro para el Navegador?	¿Funciona el código original?
PC	http://localhost:8080	SÍ (Excepción especial)	SÍ
Blogger	https://tu-sitio.com	SÍ (Tiene certificado SSL)	SÍ
Android	http://192.168.0.14:8080	NO (Es una IP privada por HTTP)	NO
¿Por qué el PC es la excepción?
Los navegadores consideran que localhost (o 127.0.0.1) es seguro por definición, aunque no tenga HTTPS, porque los datos no salen de tu propia máquina.

Sin embargo, cuando usas la IP de tu celular (192.168.x.x), el navegador detecta que los datos están viajando por la red Wi-Fi. Como no hay un certificado de seguridad (SSL), el navegador "desactiva" el botón de copiar para protegerte, pensando que alguien en la red podría interceptar o manipular lo que copias.

¿Cómo lo arreglas para Android?
Como te mencioné antes, la única forma de engañar al navegador en Android cuando usas una IP local es usar el método antiguo (document.execCommand('copy')).

Este método no pregunta si el sitio es seguro; simplemente copia lo que esté seleccionado en un cuadro de texto. Por eso el código que te pasé arriba crea un textarea invisible, mete el texto ahí, lo "selecciona" y lo copia.

¿Quieres que te pase el código completo ya listo para copiar y pegar en tu archivo de Android?

Has dicho
Volveme a pasar el codigo para android

Aquí tienes el código completo y corregido. He aplicado el "Plan B" (el textarea invisible) dentro de la función de JavaScript para que el navegador de Android te deje copiar aunque no tengas HTTPS.

Solo tienes que reemplazar todo tu bloque de <script> por este:

HTML
<script>
function copyCode(buttonElement) {
    // 1. Buscamos el contenedor y el texto
    const container = buttonElement.closest('.code-block-container');
    const codeBlock = container.querySelector('.code-content');
    const textToCopy = codeBlock.innerText.trim();

    // Función interna para el efecto visual de "Copiado"
    const feedbackVisual = () => {
        const originalText = buttonElement.innerText;
        buttonElement.innerText = "¡Copiado!";
        buttonElement.style.color = "#3fb950"; // Verde
        
        setTimeout(() => {
            buttonElement.innerText = originalText;
            buttonElement.style.color = ""; 
        }, 2000);
    };

    // --- LÓGICA PARA ANDROID / HTTP LOCAL ---
    
    // Intento 1: Método moderno (Solo funciona en HTTPS o Localhost)
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy)
            .then(feedbackVisual)
            .catch(err => console.error('Error al copiar:', err));
    } 
    else {
        // Intento 2: Método compatible con Android (HTTP / IP local)
        // Creamos un elemento de texto oculto
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        
        // Lo hacemos invisible para el usuario
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        
        // Seleccionamos el contenido y ejecutamos el comando "copy"
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            if (successful) {
                feedbackVisual();
            }
        } catch (err) {
            console.error('No se pudo copiar en este navegador', err);
        }

        // Limpiamos el documento borrando el textarea temporal
        document.body.removeChild(textArea);
    }
}
</script>
¿Qué cambió exactamente?
window.isSecureContext: El código ahora pregunta: "¿Estamos en un sitio seguro?".

Si la respuesta es NO (como en tu Android): En lugar de usar navigator.clipboard (que el navegador bloquea), crea un pequeño cuadro de texto fantasma, mete tu código ahí, lo selecciona y le ordena al sistema operativo "¡Copia esto!".

Con esto ya debería funcionarte perfectamente en el servidor de tu celular. ¿Quieres que te ayude a probar si el botón ahora responde al toque en tu Android?

Has dicho
Osea tu nuevo codigo js sirve para blogger como para android local?

Exactamente. Ese código es "híbrido". Funciona en ambos escenarios porque primero detecta dónde se está ejecutando y elige la mejor herramienta para copiar.

Aquí te explico cómo se comporta el script según dónde lo abras:

1. En Blogger (HTTPS)
El navegador detecta que el sitio es seguro. Entonces usa navigator.clipboard, que es la tecnología más moderna, rápida y limpia para copiar texto.

2. En Android Local (http://192.168...)
El navegador bloquea la tecnología moderna por no tener HTTPS. Entonces, el script activa automáticamente el "Plan B" (el textarea invisible). Este método engaña al navegador de Android haciéndole creer que eres tú quien seleccionó el texto manualmente, permitiendo que se copie al portapapeles sin errores.

3. En PC Local (localhost)
Como los navegadores confían ciegamente en localhost, usará el método moderno igual que en Blogger.

El código completo (HTML + CSS + JS corregido)
Si quieres copiar todo el bloque de una vez para probarlo en tu servidor de Android, aquí lo tienes unificado:

HTML
<style>
  .code-block-container { 
    width: 100%; max-width: 650px; border: 1px solid #30363d; 
    border-radius: 6px; overflow: hidden; background-color: #f0f4f9;
    margin: 20px 0; padding: 0; box-sizing: border-box; 
  }
  .code-header {
    display: flex; justify-content: space-between; align-items: center;  
    padding: 8px 16px; background-color: #f0f4f9; border-bottom: 1px solid #30363d; 
    font-size: 14px; color: #444746; font-weight: 500;
  }
  .copy-button {
    background: none; border: none; color: #444746; cursor: pointer;  
    font-size: 14px; display: flex; align-items: center; gap: 5px; transition: 0.2s;
  }
  .code-content { 
    margin: 0 !important; padding: 18px; overflow-x: auto;   
    font-family: monospace; font-size: 14px; line-height: 1.45;   
    color: #444746; white-space: pre; box-sizing: border-box;
  }
</style>

<figure class="code-block-container">
  <figcaption class="code-header">
    <span>html/css/js</span>
    <button class="copy-button" onclick="copyCode(this)">Copiar codigo</button>
  </figcaption>
  <pre class="code-content">hola mundo aqui 1</pre>
</figure>

<script>
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

    // Lógica Híbrida:
    if (navigator.clipboard && window.isSecureContext) {
        // Método para Blogger y PC
        navigator.clipboard.writeText(textToCopy).then(showSuccess);
    } else {
        // Método para Android Local (HTTP)
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            if (document.execCommand('copy')) showSuccess();
        } catch (err) {
            console.error('Error al copiar', err);
        }
        document.body.removeChild(textArea);
    }
}
</script>
¿Te gustaría que le añada algún icono de portapapeles al botón para que se vea más profesional?

Has dicho
Ok ahora as documentacion explicando porque se modifico el js para que funcione en android local y explica el codigo que se agrego al js

Esta es la documentación técnica de por qué el código original fallaba en tu servidor de Android y cómo la nueva solución resuelve el problema mediante una estrategia de "Fallback" (respaldo).

📄 Documentación Técnica: Sistema de Copiado Híbrido
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

JavaScript
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