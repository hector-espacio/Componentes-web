Qué está sucediendo?
Cuando el navegador carga reactdatos.json por primera vez, guarda una copia en su memoria interna (caché) para no tener que pedírselo al servidor otra vez si lo necesitas pronto. Al renombrar el archivo en tu carpeta:

El servidor ya no encuentra el archivo físico.

Pero el navegador, al refrescar, dice: "Ah, yo ya tengo una copia de reactdatos.json de hace un minuto, usaré esa en lugar de molestar al servidor".

Cómo forzar la actualización (Sin usar la tecla Ctrl)
Como mencionaste que no usas la tecla Ctrl, no podemos usar el típico Ctrl + F5. Intenta esto con el mouse:

En Chromium (tu navegador), haz clic derecho en cualquier parte blanca de la página.

Selecciona Inspeccionar (o Inspect). Se abrirá un panel a la derecha o abajo.

Ahora, con ese panel abierto, ve al icono de Refrescar (la flecha circular al lado de la barra de direcciones) y deja presionado el clic izquierdo del mouse durante un segundo.

Aparecerá un menú oculto. Selecciona la opción que dice: "Vaciar la caché y volver a cargar de manera forzada".

Cómo verificar que el servidor fallará
Una vez que hagas eso, el navegador borrará su copia temporal e irá a buscar el archivo real al servidor. Como lo renombraste, verás que:

En la consola de la terminal aparecerá un error 404 Not Found para el archivo .json.

En la página web, la lista de usuarios debería aparecer vacía o mostrar un error de carga.
