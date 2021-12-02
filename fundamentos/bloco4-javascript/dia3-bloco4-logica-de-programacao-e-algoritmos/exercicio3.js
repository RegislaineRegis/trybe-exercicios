let n = 5;

let resultado = '';


for(let linha = 1; linha <= coluna; linha += 1){
    for(let coluna = 1; coluna <= n ; coluna += 1){
        resultado += '*';
    }
    console.log(resultado);
    resultado = '';
}

