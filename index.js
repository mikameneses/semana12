
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
                        // Generar los iconos de estrellas
                        let estrellasHTML = '';
                        for (let i = 0; i < estrellas.numberrange; i++) {
                        estrellasHTML += '<i class="fas fa-star text-warning"></i>'; // Icono de estrella lleno
                        }

                        listItem.innerHTML = `<strong>${estrellas.name}</strong> - Compañía: ${estrellas.company} - Estrellas: ${estrellasHTML}`;

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
