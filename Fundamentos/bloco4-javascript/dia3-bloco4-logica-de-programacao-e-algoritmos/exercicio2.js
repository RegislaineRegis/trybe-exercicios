let n = 5;

let resultado = '';


for(let linha = 1; linha <= n; linha += 1){
    for(let coluna = 1; coluna <= linha ; coluna += 1){
        resultado += '*';
    }
    console.log(resultado);
    resultado = '';
}
