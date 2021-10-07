const { expect } = require('chai');

const numberClassificator = require('./number');

describe('Quando o número for maior que zero', () => {
  it('retorna "positivo"', () => {
    const resposta = numberClassificator(4);

    expect(resposta).to.be.equals('positivo');
  });
});

describe('Quando o número for menor que zero', () => {
  it('retorna "negativo"', () => {
    const resposta = numberClassificator(-4);

    expect(resposta).to.be.equals('negativo');
  });
});

describe('Quando o número for igual a zero', () => {
  it('retorna "neutro"', () => {
    const resposta = numberClassificator(0);

    expect(resposta).to.be.equals('neutro');
  });
});

describe('Quando for informado algum valor diferente de number', () => {
  it('retorna "o valor deve ser um número"', () => {
    const resposta = numberClassificator('Olá');

    expect(resposta).to.be.equals('o valor deve ser um número');
  });
});