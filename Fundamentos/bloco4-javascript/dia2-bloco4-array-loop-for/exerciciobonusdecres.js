let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let auxValor;
let auxContador = 0;

for(let indexPri = 1; indexPri < numbers.length; indexPri += 1){
   for(let index = 0; index < numbers.length -1; index += 1){
     if(numbers[index] > numbers[index + 1]){
         auxValor = numbers[index];
         numbers[index] = numbers[index +1];
         numbers[index +1] = auxValor;
       }
    }
}
console.log(" Array impresso ao contrario ficando em ordem decrescente:");
for(let index = numbers.length; index >=0; index -=1){
  console.log(numbers[index]);
}