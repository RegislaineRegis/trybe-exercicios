const salarioBruto = 3000.00;
let aliquotaInss;
let salarioLiquido;
let salarioBase;

if( salarioBruto <= 1556.94){
    aliquotaInss = salarioBruto * 0.08;
}else if( salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    aliquotaInss = salarioBruto * 0.09;
}else if( salarioBruto > 2594.92 && salarioBruto<= 5189.82){
    aliquotaInss = salarioBruto * 0.11;
}else{
    aliquotaInss = 570.88;
}
salarioBase = salarioBruto -aliquotaInss;

if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
 salarioLiquido = salarioBase - ((salarioBase * 0.075) - 142.80);
 console.log("O salário liquido é de:", salarioLiquido);
}else if(salarioBase >= 2826.66 && salarioBase <= 3751.05 ){
    salarioLiquido = salarioBase - ((salarioBase * 0.15) - 354.80);
    console.log("O salário liquido é de:", salarioLiquido);
}else if(salarioBase >= 3751.06 && salarioBase <= 4664.68 ){
    salarioLiquido = salarioBase -((salarioBase * 0.225) - 636.13);
    console.log("O salário liquido é de:", salarioLiquido);
}else if(salarioBase > 4664.68 ){
    salarioLiquido = salarioBase - ((salarioBase * 0.275) - 869.36);
    console.log("O salário liquido é de:", salarioLiquido);
}
else{
    console.log("Isento de imposto de renda:",salarioBase);
}
