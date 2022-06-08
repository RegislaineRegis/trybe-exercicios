const pesoPadrao = 80;
const alturaPadrao = 178;

const calculaImc = (peso, altura) => {
 const alturaMetros = altura / 100;
 const alturaAoQuadrado = alturaMetros ** 2;

 const imc = ( peso / alturaAoQuadrado );
 return imc;
}

function main() {
  const imc = calculaImc(pesoPadrao, alturaPadrao);

  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();

