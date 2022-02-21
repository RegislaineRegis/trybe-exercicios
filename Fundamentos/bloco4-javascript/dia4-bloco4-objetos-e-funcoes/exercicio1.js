let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
 };
 let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
 };

 // console.log('Boas-vindas: ' + info.personagem);
 //  console.log(info);
 /*
 for(let key in info){
  console.log(key);
 }*/
 for(let key in info){
    if(key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim'){
        console.log('ambos são recorrente');
    } else{
        console.log(info[key] + ' e ' + info2[key]);
       }
 }