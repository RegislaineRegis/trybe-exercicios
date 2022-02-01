//const sum = (value1, value2) => value1 + value2;
//console.log(sum(2,'3'));
/*
const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      throw error.message;
    }
  };
  
  console.log(sum(2, '3'));*/
  /*
  const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  console.log(customer1);
  
  customer1.lastName = 'Faria';
  console.log(customer1);
  
  const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };
  
  console.log(customer2);
  customer2['lastName'] = 'Silva';
  console.log(customer2);*/
/*
  const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer[newKey] = lastName;
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;
  console.log(customer);*/

  //PRATICANDO - PARTE I- ADD NOVAS CHAVES KEYS
  /*
  const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };

  const newObjeto = (objeto,nomeChave,valor) => objeto[nomeChave] = valor;
  newObjeto(customer,'lastName','Silva')
  console.log(customer);*/

  //Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade"
 /* const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
const newObjeto = (objeto) => {
    const newArray = Object.keys(objeto);
    for(let index in newArray){
        console.log(`${newArray[index]} , Nível: ${objeto[newArray[index]]}`);
    }
}
console.log('Estudante 1:');
newObjeto(student1);*/
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};
/*
const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));*/
/*
const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);
for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};*/
/*
const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);*/

/*
const average = (array) => {
  let media;
  let tamanho = array.length;
  if (array.length === 0) {
    return undefined;
  }
  for (let index = 0; index < tamanho; index += 1) {
    if ( typeof (array[index]) !== 'number') {
      return undefined;
    }
  } 
  for (let index = 0; index < tamanho; index += 1) {
    media += array[index];
  }  
  media /= tamanho;
  return Math.round(media);
};  */
  //console.log(average([2,-1]));

  const createStudent = (name) => {
    const estudante = {
      nome: name,         
    };  
     
    return estudante;
  }; 
   console.log(createStudent('Leandrão, o Lobo Solitário'));