//Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
const botaoClick = document.getElementById('evento');
let clickCount = 0;

const incrementaCount = () => {    
    const paragrafo = document.getElementById('contandoClicks');
    clickCount = clickCount + 1;   
    paragrafo.innerHTML = clickCount
};

botaoClick.addEventListener('click', incrementaCount);

