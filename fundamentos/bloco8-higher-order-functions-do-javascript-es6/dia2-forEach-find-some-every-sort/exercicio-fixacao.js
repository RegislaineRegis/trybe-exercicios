/*const createStudent = (nome) => {
    const estudante = {
      name:nome,
      feedback:() => 'Eita pessoa boa!', 
    };
    return estudante;
  };
console.log(createStudent('Leandrão, o Lobo Solitário'));
console.log(createStudent('nome').feedback());*/
/*
const myCounter = () => {
  const myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let counter2 = 2; counter2 <= 3; counter2 += 1) {
      myArray.push(counter2);
    }
  }
  return myArray;
};
console.log(myCounter());
//Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3]*/

//1 - Use o método forEach chamando a callback showEmailList para apresentar os emails
/*const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach(showEmailList);*/

//1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
/*const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => ((number % 3 === 0 ) && (number % 5 === 0));


console.log(numbers.find(findDivisibleBy3And5));*/
/*
//2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5;

console.log(names.find(findNameWithFiveLetters));*/

//3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  /*
  const findMusic = (musica) => musica.id === '31031685';
  
  console.log(musicas.find(findMusic));*/
  /*
  function findMusic(id) {
   return musicas.find((musica) => musica.id === id); 
  }
  
  console.log(findMusic('31031685'));*/
  /*
  const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];
  
  const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);  
  
  console.log(verifyFirstLetter('J', listNames)); // true
  console.log(verifyFirstLetter('x', listNames)); // false*/
  
  //1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;
  /*
  const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
  
  const hasName = (arr, name) =>  arr.some((nome) => nome === name);
  
  console.log(hasName(names, 'Regis'));*/
  
  //2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;
  /*
  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => arr.every((pessoa) => pessoa.age >= minimumAge);
  
  
  console.log(verifyAges(people, 18));*/
  
  // - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .
  
  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  /*
  people.sort((a,b) => (a.age - b.age));
  
  console.log(people);*/
  //2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente .
  /*people.sort((a,b) => (b.age - a.age));
  
  console.log(people);*/