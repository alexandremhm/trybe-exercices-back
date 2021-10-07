const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const escreveArquivo = require('./write.js');
const nomeDoArquivo = './teste.txt';

const CONTEUDO_DO_ARQUIVO = 'ok';

describe('a resposta', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  it('é uma "string"', () => {
    const resposta = escreveArquivo('arquivo.txt', '#vqv conteúdo');

    expect(resposta).to.be.a('string');
  });

  it('é igual a "ok"', () => {
    const resposta = escreveArquivo('arquivo.txt', '#vqv conteúdo');

    expect(resposta).to.be.equals('ok');
  });
});


