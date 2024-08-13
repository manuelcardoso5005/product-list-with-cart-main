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
    console.log(data);
  })
  .catch(error => {
    console.error('Houve um problema com a requisição: ', error);
  });
