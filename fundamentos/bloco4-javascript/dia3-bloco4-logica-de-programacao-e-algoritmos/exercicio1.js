/* Para o primeiro exercício de hoje, faça um programa que,
 dado um valor n qualquer, seja n > 1 , imprima na tela um 
quadrado feito de asteriscos de lado de tamanho n */

let n = 5;
let resultado = '';


for(let coluna = 0; coluna < n; coluna += 1){
    for(let linha= 0; linha < n; linha += 1){
        resultado += '*';
    }
    console.log(resultado);
    resultado = '';
}