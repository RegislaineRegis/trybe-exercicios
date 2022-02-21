let estado = "aprovada";

switch(estado){
    case "aprovada":
        console.log("Você foi aprovada(o)!!");
        break;
    case "lista":
        console.log("Você esta na lista!");
        break;
    case "reprovada":
        console.log("Você foi reprovada(o)");
        break;
    default:
        console.log("Nenhum dos criterios foi identificado");    
}