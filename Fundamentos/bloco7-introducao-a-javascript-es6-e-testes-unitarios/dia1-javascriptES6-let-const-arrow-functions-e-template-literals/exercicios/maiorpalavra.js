const longestWord = frase => {
    let newArray = frase.split(' ');
    let contador = 0;
    let palavra = '';
    for(const conteudo of newArray){
        if(conteudo.length > contador){
            contador = conteudo.length;
            palavra = conteudo;

        }
    }
    return palavra;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));