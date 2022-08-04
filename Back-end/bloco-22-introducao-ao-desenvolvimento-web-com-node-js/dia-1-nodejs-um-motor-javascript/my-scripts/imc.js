const readline = require('readline-sync');


const calculaImc = (peso, altura) => {
 const alturaMetros = altura / 100;
 const alturaAoQuadrado = alturaMetros ** 2;

 const imc = ( peso / alturaAoQuadrado );
 return imc;
}

function main() {
  const peso = readline.questionFloat('Qual o seu peso? (em kg)');
  const altura = readline.questionInt('Qual a sua altura? (em cm)');
  const imc = calculaImc(peso, altura);

  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();

