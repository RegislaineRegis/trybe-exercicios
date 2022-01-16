/*const array = [13, 3, 4, 10, 7, 2];
const oddsAndEvens = (array) => {
    for (let index1 = 0; index1 < array.length; index1 += 1){
        for (let index2 = 1; index2 < array.length; index2 += 1){
            if (array[index1] > array[index2]){
                let aux = array[index2];
                array[index2] = array[index1];
                array[index1] = aux;
            }
        }
    }
    return array;
}

const newArray = oddsAndEvens(array); // será necessário alterar essa linha 😉
console.log(newArray);*/
/*const oddsAndEvens = [13, 3, 4, 10, 7, 2];

    const odernandoArray = () => {
        oddsAndEvens[0] = 2
        oddsAndEvens[1] = 3
        oddsAndEvens[2] = 4
        oddsAndEvens[3] = 7
        oddsAndEvens[4] = 10
        oddsAndEvens[5] = 13
    
        return oddsAndEvens
    }
    const newarray = odernandoArray()

console.log(`Os números ${newarray} se encontram ordenados de forma crescente!`); */
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((index1,index2) => {
    return index1 - index2
});
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);