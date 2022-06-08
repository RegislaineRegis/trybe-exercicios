const { expect } = require('chai');

const valorNumero  = require('../valorNumero');

describe('Quando o número for maior que Zero ' , () => {
  it('retorna "positivo"', () => {
    const resposta = valorNumero(3);

    expect(resposta).to.be.equals('positivo');
  });
});
describe('Quando o número for menor que Zero ' , () => {
  it('retorna "negativo"', () => {
    const resposta = valorNumero(-2);

    expect(resposta).to.be.equals('negativo');
  });
});
describe('Quando o número for igual que Zero ' , () => {
  it('retorna "neutro"', () => {
    const resposta = valorNumero(0);

    expect(resposta).to.be.equals('neutro');    
  });
});
describe('Quando o valor for diferente de Número ' , () => {
  it('retorna "valor de tipo diferente"', () => {
    const resposta = valorNumero('bb');

    expect(resposta).to.be.equals('o parâmetro deve ser um número');    
  });
});