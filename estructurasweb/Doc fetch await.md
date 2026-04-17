¡Claro! Pasar de la sintaxis de promesas (`.then()`) a `async/await` hace que el código sea mucho más legible, ya que se lee de forma secuencial, casi como si fuera código síncrono.

Aquí tienes el script adaptado manteniendo exactamente la misma lógica de manejo de errores y manipulación del DOM:

```html
<script>
    // Creamos una función asíncrona para poder usar 'await'
    async function cargarDatos() {
        const caja = document.getElementById('contenedor');

        try {
            // Realizamos la petición
            const respuesta = await fetch('Ejemplo02-FetchThenVectorial-datos.json');

            // Validamos si la respuesta es correcta (status 200-299)
            if (!respuesta.ok) {
                throw new Error("Servidor prendido sin encontrar archivo");
            }

            // Parseamos el JSON
            const datos = await respuesta.json();

            // Procesamos los datos
            let contenido = "";
            datos.forEach(item => {
                contenido += `
                    <div style="margin-bottom: 10px;">
                        Nombre: ${item.nombre}<br>
                        Edad: ${item.edad}<br>
                        Pagina: ${item.web}
                    </div><hr>`;
            });

            // Inyectamos en el HTML
            caja.innerHTML = contenido;

        } catch (error) {
            // Manejo de errores (el equivalente al .catch)
            if (error.message.includes("prendido")) {
                caja.innerHTML = `<b style="color:orange;">${error.message}</b>`;
            } else {
                caja.innerHTML = `<b style="color:red;">Servidor apagado</b>`;
            }
        }
    }

    // Ejecutamos la función
    cargarDatos();
</script>
```

### ¿Qué cambió exactamente?

* **`async function`**: Necesitamos envolver el código en una función marcada como `async` para habilitar el uso de la palabra clave `await`.
* **`try...catch`**: En lugar de usar `.catch()` al final de la cadena, usamos un bloque `try` para el flujo principal y `catch` para capturar cualquier error (tanto de red como los lanzados por nosotros con `throw`).
* **`await`**: Sustituye a los `.then()`. El código "espera" a que la promesa se resuelva antes de pasar a la siguiente línea, lo que evita anidar funciones.
* **Mantenimiento de lógica**: He respetado tus validaciones de `!respuesta.ok` y los estilos de error específicos que definiste.
