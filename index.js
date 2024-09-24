document.addEventListener('DOMContentLoaded', () => {
    // Obtener el ID del comentatrio guardado en localStorage
    const comentarioId = localStorage.getItem('id');

    if (comentarioId) {
        // Dirección de la API
        const apiUrl = `https://nataliasotelo.github.io/act-estrellas/estrellas.json`;

        // Realizar la solicitud a la API para obtener los datos del producto
        fetch(apiUrl)
            .then(response => response.json())
            .then(list => {
               

                // Actualizar los detalles del producto en la página
                document.getElementById('company').textContent = 'Compañia: ${estrellas.company}';
                document.getElementById('name').textContent = `Nombre: ${estrellas.name}`;
                document.getElementById('numberrange').textContent =  ${estrellas.numberrange};

               
            .catch(error => {
                console.error('Error al obtener los datos del producto:', error);
            });
    } else {
        console.error('Comentario no encontrado en localStorage');
    }
});
