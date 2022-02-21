const addString = (frase, palavra) => {
    let newString = frase.split(' ');    
    for(let conteudo in newString){
        if(newString[conteudo] === 'x'){
            newString[conteudo] = palavra;
          }
    }    
    return newString;
}
console.log(addString('Tryber boa noite! x aqui!', 'Bebeto'));