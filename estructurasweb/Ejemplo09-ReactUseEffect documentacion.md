if (error !== null) {
                return (
                    <h1>
                        <u>Error: {error}</u>
                    </h1>
                );
            }

            if (cargando === true) {
                return <div>Cargando equipo...</div>;
            }

            return (
                <div>
                    <h1>Directorio de Personas</h1>
---
¿Qué pasa en la segunda pasada (cuando termina el fetch)?
Cuando el fetch falla, vos hacés esto:

setError("Servidor apagado...")

setCargando(false)

React vuelve a ejecutar App() y se encuentra con este camino:

Primer Filtro (if error !== null): React pregunta "¿El error es distinto de null?". La respuesta es SÍ. Entonces ejecuta el return del error. Al haber un return, la función muere ahí.

Sentencias ignoradas: Como el código ya retornó el error, React jamás llega a leer el if (cargando === true) ni el return de la lista de personas.

¿Por qué es la forma "profesional" de hacerlo?
Aunque parezca que va "al revés" de la cronología, se hace así por seguridad lógica:

Prioridad absoluta al Error: Si algo sale mal, el usuario debe saberlo inmediatamente. No importa si la carga terminó o no; si hay un error, el error manda.

Código Limpio: Al poner los if con return arriba (lo que se llama Early Return o Retorno Temprano), evitás que el código de abajo (el mapeo de las tarjetas) se ejecute accidentalmente con datos vacíos o erróneos.

El estado "Feliz" al final: Siempre se deja el return con el contenido real de la página al final de todo, asumiendo que si el código llegó hasta ahí, es porque no hubo errores y la carga ya terminó.

En conclusión: Tu orden original es el correcto. Primero chequeás si hubo una tragedia (error), después chequeás si todavía estás trabajando (cargando), y si pasaste esos dos guardias, recién ahí mostrás la web.
