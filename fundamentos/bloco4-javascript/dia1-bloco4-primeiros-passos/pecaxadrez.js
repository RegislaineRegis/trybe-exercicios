let nomePecaXadrez = "Rainha";
let conversao = nomePecaXadrez.toLowerCase();

switch(conversao){
  case 'peão':
      console.log("Peão: Anda para frente, só uma casa por vez, exceto no seu primeiro movimento: pode andar duas casas");
      break;
  case 'torre':
      console.log("Torre: Movimenta quantas casas quiser na horizontal ou vertical, porém em apenas um sentido pos jogada");
      break;
  case 'rei':
      console.log("Rei: Pode se mover em todas as direções, porém uma casa por vez.");
      break;
  case 'cavalo':
      console.log("Cavalo: Anda duas casas em uma direção e então se move mais uma casa em um ângulo de 90 graus, ou no formato de um (L).");     
      break;      
  case 'bispo':
      console.log("Bispo: Se movimenta apenas pela diagonal em um sentido por jogada.");
      break;
  case 'rainha':
      console.log("Rainha: Pode se movimentar em qualquer direção em um único sentido na jogada e em quantas casas quiser.");
      break;
  default:
      console.log("Erro: Peça inválida");
      break;
}