const fs = require('fs');
const sinon = require('sinon');

const { expect } = require('chai');

const escrevaArquivo = require('../escrevaArquivo');

describe('Escrevendo no arquivo...', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('Recebeu o nome e conteudo do arquivo', () => {
    it('a resposta tem que ser uma string', () => {
    const resposta = escrevaArquivo('arquivo.txt', 'Aprendendo testes');
    
    expect(resposta).to.be.a('string');
    });
  });
  describe('Recebeu o nome e conteudo do arquivo', () => {
   it('a resposta tem que ser um ok', () => {
    const resposta = escrevaArquivo('arquivo.txt', 'Aprendendo testes');
    
    expect(resposta).to.be.equals('ok');
   });
  });
});