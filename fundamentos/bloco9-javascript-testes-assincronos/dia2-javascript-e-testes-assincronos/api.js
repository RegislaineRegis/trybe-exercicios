
const url = 'https://api.coincap.io/v2/assets';

const pegaMoedas = () => {

fetch(url)
    .then((response) => response.json())

}