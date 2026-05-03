El objeto event es enorme porque hereda muchas propiedades dependiendo del tipo de evento (si es de mouse, de teclado, de formulario, etc.).
Aquí tienes una lista organizada de las propiedades más útiles y comunes que puedes usar cuando manejas eventos en un **input** u otros elementos:
### 1. Propiedades del Elemento (target)
Estas se refieren al elemento que disparó el evento (el "dueño" del evento).
 * **event.target**: El elemento HTML que originó el evento (el input, el botón, etc.).
 * **event.target.value**: El contenido actual del input.
 * **event.target.id**: El identificador único del elemento.
 * **event.target.name**: El nombre asignado al campo (muy usado en formularios).
 * **event.target.tagName**: El nombre de la etiqueta en mayúsculas (ej: "INPUT", "DIV").
 * **event.target.type**: El tipo de input (ej: "text", "password", "checkbox").
### 2. Propiedades de Estado y Teclado
Muy útiles en eventos como onkeydown, onkeyup o onkeypress.
 * **event.key**: El valor de la tecla presionada (ej: "Enter", "a", "ArrowUp").
 * **event.code**: El código físico de la tecla (ej: "KeyA", "Digit1").
 * **event.shiftKey**: true si la tecla Shift estaba presionada.
 * **event.ctrlKey**: true si la tecla Control estaba presionada.
 * **event.altKey**: true si la tecla Alt estaba presionada.
### 3. Propiedades de Identificación del Evento
Información sobre el suceso en sí.
 * **event.type**: El nombre del evento (ej: "change", "click", "mouseover").
 * **event.timeStamp**: El tiempo exacto (en milisegundos) en el que ocurrió el evento desde que se abrió la página.
 * **event.isTrusted**: Devuelve true si el evento fue generado por una acción del usuario (un clic real) y false si fue disparado por un script.
### 4. Propiedades de Mouse (Coordenadas)
Si el evento es un clic o el mouse se mueve sobre el input.
 * **event.clientX / event.clientY**: La posición del cursor respecto a la ventana del navegador (viewport).
 * **event.pageX / event.pageY**: La posición del cursor respecto a toda la página (incluyendo si hay scroll).
### 5. Métodos de Control (Acciones)
No son datos, sino "órdenes" que le das al evento.
 * **event.preventDefault()**: Cancela el comportamiento por defecto (ej: evita que un link te lleve a otra página o que un formulario se envíe).
 * **event.stopPropagation()**: Detiene la "propagación" del evento, evitando que los elementos padres se enteren de que este evento ocurrió.
### Ejemplo rápido para probarlo todo:
Prueba este código. Al cambiar el texto, verás en la **consola (F12)** el "informe" completo:
```html
<input type="text" id="user_input" 
       onchange="console.log({
         Tipo: event.type,
         Valor: event.target.value,
         ID: event.target.id,
         Tiempo: event.timeStamp,
         EsHumano: event.isTrusted
       })">

```
¿Hay alguna de estas propiedades que te cause curiosidad o que no sepas cómo aplicar?
