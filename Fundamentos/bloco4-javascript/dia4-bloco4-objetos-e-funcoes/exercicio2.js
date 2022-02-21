let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      },
    ],
  };
    let contador = 0;
  //console.log ('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + '"' + leitor.livrosFavoritos[0].titulo + '"');
    for(let key in leitor.livrosFavoritos){
        contador += 1;
    }
  console.log(leitor.nome + ' tem ' + contador + ' livros favoritos');