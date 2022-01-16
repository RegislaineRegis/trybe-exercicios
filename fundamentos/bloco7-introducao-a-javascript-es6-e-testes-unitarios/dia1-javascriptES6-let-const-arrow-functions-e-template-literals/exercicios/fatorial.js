const fatorial = (num) => {
    let fator = 1;
    for(let index = 1; index <= num; index += 1){
     fator = fator * index;
    }
    return fator; 
}

console.log(fatorial(5)); 