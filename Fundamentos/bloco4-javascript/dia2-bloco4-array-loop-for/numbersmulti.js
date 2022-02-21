/*crie um novo array a partir do array numbers ,
 sem perdê-lo. Cada valor do novo array deverá ser igual ao valor 
correspondente no array numbers multiplicado pelo seguinte.*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let novoArray = [];
let auxiliar;

for(let index = 0; index < numbers.length; index++){
    if(index + 1 < numbers.length){
        auxiliar = numbers[index] * numbers[index +1];
        novoArray.push(auxiliar);
    }else{
        auxiliar = numbers[index] * 2;
        novoArray.push(auxiliar);
    }
}
console.log(novoArray);