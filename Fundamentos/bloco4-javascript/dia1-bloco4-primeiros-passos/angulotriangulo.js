const angulo1 = 80;
const angulo2 = 80;
const angulo3 = 8;

let resultadoTriangulo = angulo1 + angulo2 + angulo3;

if(angulo1 > 0 && angulo2 > 0 && angulo3 > 0){
    if(resultadoTriangulo == 180){
      console.log("Os ângulos representam os ângulos de um triângulo:",true);

     }else{
    console.log("Os ângulos não representam os ângulos de um triângulo:",false);
    }
} else{
    console.log(" Erro: Ângulo inválido");
}
