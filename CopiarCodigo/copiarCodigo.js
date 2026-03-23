function copyCode(buttonElement) {
    // 1. Buscamos el contenedor padre (figure o section) más cercano al botón
    const contenedor = buttonElement.closest('.code-block-container');
    
    // 2. Dentro de ese contenedor específico, buscamos el texto del código
    const bloqueCodigo = contenedor.querySelector('.code-content');
    const textToCopy = bloqueCodigo.innerText;

    // 3. Proceso de copiado
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Feedback visual en el botón que se presionó
        const originalText = buttonElement.innerText;
        buttonElement.innerText = "¡Copiado!";
        buttonElement.classList.add('copiado-exito'); // Puedes añadir estilos CSS para esto

        setTimeout(() => {
            buttonElement.innerText = originalText;
            buttonElement.classList.remove('copiado-exito');
        }, 2000);
    });
}
