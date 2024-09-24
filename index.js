//document.addEventListener('DOMContentLoaded', () => {
    // Obtener el ID del comentatrio guardado en localStorage
  //  const comentarioId = localStorage.getItem('id');

    //if (comentarioId) {
        // Dirección de la API
      //  const apiUrl = `https://nataliasotelo.github.io/act-estrellas/estrellas.json`;

        // Realizar la solicitud a la API para obtener los datos del producto
        //fetch(apiUrl)
          //  .then(response => response.json())
            //.then(list => {
               

                // Actualizar los detalles del comentario en la página
              //  document.getElementById('company').textContent = 'Compañia: ${estrellas.company}';
                //document.getElementById('name').textContent = `Nombre: ${estrellas.name}`;
                //document.getElementById('numberrange').textContent =  ${estrellas.numberrange};

               
            //.catch(error => {
              //  console.error('Error al obtener los datos del producto:', error);
            //});
    //} else {
      //  console.error('Comentario no encontrado en localStorage');
    //}
//});
document.addEventListener('DOMContentLoaded', () => {
            const apiUrl = 'https://nataliasotelo.github.io/act-estrellas/estrellas.json';
            
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const comentariosList = document.getElementById('comentarios-list');
                    const userSelect = document.getElementById('user-select');

                    data.forEach(estrellas => {
                        const listItem = document.createElement('li');
                        listItem.className = 'list-group-item';
                        listItem.innerHTML = `<strong>${estrellas.name}</strong> - Compañía: ${estrellas.company} - Estrellas: ${estrellas.numberrange}`;
                        comentariosList.appendChild(listItem);
                        
                        const option = document.createElement('option');
                        option.textContent = estrellas.name;
                        userSelect.appendChild(option);
                    });
                })
                .catch(error => {
                    console.error('Error al obtener los datos:', error);
                });

            document.getElementById('submit-comment').addEventListener('click', () => {
                const selectedUser = document.getElementById('user-select').value;
                const commentText = document.getElementById('comment').value;

                if (selectedUser && commentText) {
                    alert(`Comentario agregado para ${selectedUser}: ${commentText}`);
                } else {
                    alert('Por favor, selecciona un usuario y escribe un comentario.');
                }
            });
        });
