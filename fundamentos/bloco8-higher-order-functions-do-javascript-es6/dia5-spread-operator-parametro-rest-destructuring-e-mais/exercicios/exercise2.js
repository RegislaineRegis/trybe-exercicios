// - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. 

const sum = (...numbers) => numbers.reduce(((acc, val) => acc + val), 0);

console.log(sum(3,2,3,5));