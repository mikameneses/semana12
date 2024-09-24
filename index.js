document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://nataliasotelo.github.io/act-estrellas/estrellas.json';

  fetch(apiUrl)
    .then(response => response.json())
    .then(list => {
      const userList = document.getElementById('userList');
      const selectName = document.getElementById('selectName');

      // Crear un contenedor para cada usuario
      list.forEach(user => {
        // Crear elementos para nombre, compañía y estrellas
        const userCard = document.createElement('div');
        userCard.className = 'card mb-3';
        userCard.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text">Compañía: ${user.company}</p>
            <div class="star-rating" data-user="${user.name}">
              ${renderStars(user.numberrange)}
            </div>
          </div>
        `;

        // Agregar al contenedor
        userList.appendChild(userCard);

        // Agregar el nombre al select
        const option = document.createElement('option');
        option.value = user.name;
        option.textContent = user.name;
        selectName.appendChild(option);
      });

      // Función para renderizar estrellas
      function renderStars(number) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
          stars += `<a href="#" class="star ${i <= number ? 'selected' : ''}">★</a>`;
        }
        return stars;
      }

      // Funcionalidad para calificar las estrellas
      const starRatings = document.querySelectorAll('.star-rating a');
      starRatings.forEach(star => {
        star.addEventListener('click', function (e) {
          e.preventDefault();
          const parent = e.target.closest('.star-rating');
          const stars = [...parent.children];
          const selectedIndex = stars.indexOf(e.target) + 1;

          // Actualizar la visualización de estrellas
          stars.forEach((star, index) => {
            star.classList.toggle('selected', index < selectedIndex);
          });

          // Guardar el número de estrellas
          console.log(`Usuario ${parent.dataset.user} recibió ${selectedIndex} estrellas`);
        });
      });
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
});
