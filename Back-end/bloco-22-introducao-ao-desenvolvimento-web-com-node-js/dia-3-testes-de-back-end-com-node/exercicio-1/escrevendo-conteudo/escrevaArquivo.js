const fs = require('fs');

const escrevaArquivo = (nomeDoArquivo, conteudo) => {
  fs.writeFileSync(`${__dirname}/${nomeDoArquivo}`, conteudo);
  return 'ok';
}

module.exports = escrevaArquivo;