const custoDoProduto = 1;
const valorDaVenda = 3;
let valorCustoTotal;
let lucro;

if( custoDoProduto >= 0 && valorDaVenda >= 0){
    valorCustoTotal = custoDoProduto * 0.2;
    lucro = (valorDaVenda - valorCustoTotal) * 1000;
    console.log("A empresa terá de lucro ao vender mil produto:",lucro);
}
    else{
    console.log("Erro: valor menor que Zero!");
    }
    
