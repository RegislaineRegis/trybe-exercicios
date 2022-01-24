//Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .
// Faça uma lista com as suas frutas favoritas
/*
const specialFruit = ['banana', 'maca', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mel', 'creme-de-leite', 'mamao'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional ];
};

console.log(fruitSalad(specialFruit, additionalItens));*/

//1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator .

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const {name, age, nationality} = user;
  const {profession, squad, squadInitials} = jobInfos;

  const newArray = {...user, ... jobInfos};

  console.log(newArray);

  //2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals .

  console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);