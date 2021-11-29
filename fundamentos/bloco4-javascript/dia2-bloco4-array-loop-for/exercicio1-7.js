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


//descobrir qual o menor valor no array e imprimi-lo


for(let index = 0; index < numbers.length; index +=1){
   if(numbers[index] < numbers[index +1]){
        menorValor = numbers[index+1];
         
         }
   }
}
console.log("o menor valor é: ", maiorValor);


/*descobrir qual o maior valor no array e imprimi-lo

let maiorValor = 0;
for(let index = 0; index < numbers.length; index +=1){
   if(maiorValor < numbers[index]){
        maiorValor = numbers[index];
   }
}
console.log("o maior valor é: ", maiorValor);*/




/*
let number1;

for(let index = 1; index < numbers.length -1; index +=1){
    for(let i = 0; i > numbers.length ; i +=1){
         if(numbers[i] > numbers[index]){
              number1 = numbers[i];
              numbers[i] = numbers[index];
              numbers[index] = number1;

         }
    }
}
console.log("o menor valor é: ,", numbers[0]);*/