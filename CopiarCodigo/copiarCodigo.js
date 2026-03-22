
        function copyCode(buttonElement) {

            // Seleccionamos el texto del bloque

            const textToCopy = document.getElementById('code-text').innerText;

    const mensaje = "Este es el código que se copiará";



            // Copiamos al portapapeles (sin alertas)

            navigator.clipboard.writeText(textToCopy).then(() => {

                

                // Cambiamos el texto del botón temporalmente

                const originalText = "Copiar código";

                buttonElement.innerText = "Copiado";

                buttonElement.style.color = "#3fb950"; // Cambia a verde al copiar



                // Volver al estado original después de 2 segundos

                setTimeout(() => {

                    buttonElement.innerText = originalText;

                    buttonElement.style.color = "#8b949e";

                }, 2000);

            });

        }
