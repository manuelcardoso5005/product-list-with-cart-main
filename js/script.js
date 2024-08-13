const cards = document.querySelector('#cards');
const api = 'data.json';

fetch(api)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON');
    }
    return response.json();
  })
  .then(data => {
    let htmlContent = '';

    // Loop para gerar o HTML para cada item
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      htmlContent += `
      <div class="card">
          <div class="img"> 
            <picture>
              <source media="(min-width: 1200px)" srcset="${item.image.desktop}">
              <source media="(min-width: 768px)" srcset="${item.image.tablet}">
              <img src="${item.image.mobile}" alt="${item.name}">
            </picture>
          </div>
          <div class="add-panel">
            <img src="assets/images/icon-add-to-cart.svg" alt="">
            <span>Add to Cart</span>
          </div>
        <div class="food-content">
          <p class="food-type">${item.category}</p>
          <p class="food-name">${item.name}</p>
          <p class="food-price">$${item.price.toFixed(2)}</p>
        </div>
      </div>
      `;
    }

    // Define o HTML acumulado no elemento cards
    cards.innerHTML = htmlContent;

    // Log para verificar os dados
    console.log(data);
  })
  .catch(error => {
    console.error('Houve um problema com a requisição: ', error);
  });