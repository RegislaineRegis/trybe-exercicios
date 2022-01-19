const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addTurnoNoite = (objetoModificado, chave, valor) => {
    objetoModificado[chave] = valor;
  };
  const listarChaves = (obj) => Object.keys(obj);
  console.log(listarChaves(lesson3));

  const tamanhoObj = (obj) => Object.keys(obj).length;
  console.log(tamanhoObj(lesson3));

  const listaValoresObjt = (obj) => Object.values(obj);
  console.log(listaValoresObjt(lesson3));

  const allLessons = Object.assign({},{ lesson1, lesson2, lesson3 });
  console.table(allLessons);
  //console.log(tamanhoObj(allLessons));

  const totalAlunos = (obj) => {
    let soma = 0;
    for (let index = 0; index < (Object.keys(obj).length); index += 1){      
      soma += Object.values(obj)[index].numeroEstudantes;
    }
    return soma;
  };
  console.log(totalAlunos(allLessons));
  const valorChave = (obj, index) => Object.values(obj)[index];
  console.log(valorChave(lesson1, 2));

  