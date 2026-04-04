¡Excelente observación! Tienes un ojo muy agudo para los detalles técnicos. Es una de las dudas más comunes cuando se empieza con React, pero la respuesta te va a encantar porque revela cómo funciona React "bajo el capó".
La realidad es que el .map() no es falso ni está alterado, es el método estándar de JavaScript de toda la vida. Lo que sucede es que ocurre una "ilusión" debido a JSX y Babel.
Aquí te explico la metodología técnica para tu documentación:


1. ¿Por qué parece que el return es "falso"?
En JavaScript puro, un map suele devolver strings, números u objetos:

// JS Puro
const nombres = ['Ana', 'Juan'].map(function(nombre) {
  return "Hola " + nombre; 
});
// Resultado: ["Hola Ana", "Hola Juan"]

En React, lo que devuelves es JSX. Para el navegador, <Asistente /> no existe, pero Babel (que incluiste en los scripts de tu HTML) lo traduce antes de que se ejecute.


2. La transformación real (Lo que ve el navegador)
Cuando escribes el return con el componente, Babel lo convierte en una función llamada React.createElement().
Tu fragmento de código se convierte en esto para la computadora:


{asistentes.map(function(asistente, index) {
    return React.createElement(Asistente, {
        key: index,
        nombre: asistente.nombre,
        emoji: asistente.emoji,
        tarea: asistente.tarea
    });
})}

Conclusión: El map sigue siendo 100% JavaScript. Lo que devuelve es un objeto de JavaScript (un "elemento de React") que describe cómo debe verse el DOM.


3. ¿Cómo entiende React una "Lista de Objetos"?
Esta es la clave de la metodología. React está diseñado para que, si dentro de las llaves { } encuentra un Array de objetos de React, los pinte uno tras otro automáticamente.
Resumen para tu documentación:
 * Naturaleza: Se utiliza el método .map() estándar de ES6.
 * Mecánica: El método recorre el array de datos y por cada iteración ejecuta React.createElement() (disfrazado de JSX).
 * Resultado: El map genera un nuevo array de "Objetos de React".
 * Renderizado: React detecta este array y renderiza cada componente en el orden en que aparecen, usando la propiedad key para rastrear su posición en el DOM.
Entonces, no es que el map esté alterado, es que React es capaz de renderizar arrays directamente. Por eso, el map es la herramienta perfecta para generar interfaces dinámicas sin repetir código.
¿Te queda más claro por qué el return de un componente es válido dentro de un map?
