let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


/* imprimir todo o conteudo
for(let index = 0; index < numbers.length; index +=1){

    console.log (numbers[index]);
}*/
/* some todo o conteudo e imprima o resultado
let soma = 0;
for(let index = 0; index < numbers.length; index +=1){

     soma = soma + numbers[index];
}
console.log("A soma é: ", soma);*/

/*media aritmetica
let soma=0;
let media;
for(let index = 0; index < numbers.length; index +=1){

     soma = soma + numbers[index];
}
media = soma / (numbers.length);
console.log("A media aritmetica é: ", media);*/

/* caso a media maior que 20, imprima valor maior que 20, caso não valor menor que 20
let soma=0;
let media;
for(let index = 0; index < numbers.length; index +=1){

     soma = soma + numbers[index];
}
media = soma / (numbers.length);
if(media > 20){
console.log("Media é maior do que 20:", media);
}else{
    console.log("Media é menor do que 20:", media);
}*/

/*descobrir qual o maior valor no array e imprimi-lo

let maiorValor = 0;
for(let index = 0; index < numbers.length; index +=1){
   if(maiorValor < numbers[index]){
        maiorValor = numbers[index];
   }
}
console.log("o maior valor é: ", maiorValor);*/

/*quantidade de valores impares dentro de um array

let contador = 0;
for(let index = 0; index < numbers.length; index +=1){
   if( numbers[index] % 2 !== 0){
        contador +=1;
   }  
}
    if(contador !== 0){
        console.log("Dentro existe", contador, "numeros impares");
     }else{
          console.log("nNnhum valor ímpar encontrado");
     }*/

// verificando o menor valor dentro de array 

     let menorValor ;
     let auxiliar = 0;
     for(let index = 0; index < numbers.length; index +=1){
        if(numbers[index] < numbers[auxiliar]){
            menorValor = numbers[index];
          }
     }
     console.log("o menor valor dentro do array é: ", menorValor);

/*criando um array de 1 até 25 e imprimir 

 let adicionandoArray = [];
 let numero = 1;

 for(let index = 0; index < 25; index +=1){
      adicionandoArray.push(numero);
      numero +=1;
      console.log(adicionandoArray[index]);
 }*/

/*imprimindo o resultado da divisão do array por 2

 for(let index = 0; index < numbers.length; index +=1){
    let resultado = numbers[index] / 2;
    console.log(resultado);
 }*/
