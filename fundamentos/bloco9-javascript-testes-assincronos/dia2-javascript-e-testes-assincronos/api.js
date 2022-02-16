const fetch = require('node-fetch');

const pegaMoedas = () => {
    const url = 'https://api.coincap.io/v2/assets';

fetch(url)
    .then((response) => response.json())

}