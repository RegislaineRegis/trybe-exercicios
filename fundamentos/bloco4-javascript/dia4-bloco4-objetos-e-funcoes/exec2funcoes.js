let array = [2, 3, 6, 7, 10, 1];

function maiorvalor(array){
    let maiorValor = 0;
    for (let index = 0; index < array.length; index += 1) {
       if (maiorValor < array [índice]) {
            maiorValor = array [índice];
       }
    }
 return maiorValor;
}
console.log(maiorvalor());
/*

for(let position in array){
    if( array[position] === maiorvalor()){
        console.log('a posição do maior valor é: ', position);
        break;
    }
}*/