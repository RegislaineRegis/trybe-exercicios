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
/*
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

  console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);*/

  //1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
  /*
  const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

   //saudacoes[1](saudacoes[0]); // Olá

    // Produza o mesmo resultado acima, porém utilizando array destructuring

    const [saudacao, realizaSaudacao] = saudacoes;

    console.log(realizaSaudacao(saudacao));*/

    //2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis
/*
    let comida = 'gato';
    let animal = 'água';
    let bebida = 'arroz';

    console.log(comida, animal, bebida); // arroz gato água*/

  // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
  /*
  const variado = ['gato', 'animal','arroz'];

  const [comida,animal,bebida] = variado
  console.log(comida, animal, bebida);*/

  //3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares .
  /*
  let numerosPares = [1, 3, 5, 6, 8, 10, 12];

  [,,, ...numerosPares] = numerosPares;


   console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo*/
/*
const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality } = person;
  console.log(nationality);*/

  //Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined . Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian .
/*
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));*/
//Agora é hora de praticar: altere a função getPosition utilizando a property shorthand .
/*const getPosition = (latitude, longitude) => ({
    latitude,
    longitude});
  
  console.log(getPosition(-19.8157, -43.9542));*/
