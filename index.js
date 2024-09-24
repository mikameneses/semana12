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
async function fetchUsers() {
    try {
        const response = await fetch('https://nataliasotelo.github.io/act-estrellas/estrellas.json');
        if (!response.ok) {
            throw new Error('Error al recuperar los datos');
        }
        const data = await response.json();
        // Asegurarte de que estás manejando correctamente el objeto que retorna
        return data; 
    } catch (error) {
        console.error('Hubo un problema con la solicitud Fetch:', error);
    }
}

function renderStars(starCount) {
    let stars = '';
    for (let i = 0; i < starCount; i++) {
        stars += `<i class="fas fa-star"></i>`;
    }
    return stars;
}

function renderUsers(users) {
    const userList = document.getElementById('user-list');
    const userSelect = document.getElementById('user-select');
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'card mb-2 p-2';
        userDiv.innerHTML = `
            <h5>${user.name}</h5>
            <p>Compañía: ${user.company}</p>
            <p class="stars">${renderStars(user.numberrange)}</p>
        `;
        userList.appendChild(userDiv);

        const option = document.createElement('option');
        option.value = user.name;
        option.textContent = user.name;
        userSelect.appendChild(option);
    });
}

document.getElementById('submit-comment').addEventListener('click', () => {
    const selectedUser = document.getElementById('user-select').value;
    const commentText = document.getElementById('comment').value;
    alert(`Comentario para ${selectedUser}: ${commentText}`);
});

fetchUsers().then(users => {
    if (users) {
        renderUsers(users);
    } else {
        console.error('No se pudieron cargar los usuarios.');
    }
});
 ⁠
