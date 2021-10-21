const sinon = require('sinon');
const { expect } = require('chai')

const MoviesController = require('../../controllers/movieController');
const MoviesServices = require('../../services/movieService');
const { request, response } = require('express');

describe('Ao chamar o controller de getAll', () => {
  describe('quando não existe o filme no db', async () => {
    const request = {};
    const response = {};
    
    before(async () => {
      request.params = {};    
      
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      
      sinon.stub(MoviesServices, 'getById').resolves(null);
    });
    
    after(() => {
      MoviesServices.getById.restore();
    });
    
    it('é chamado o método "status" passando o código 404', async () => {
      await MoviesController.getById(request, response);
      
      expect(response.status.calledWith(404)).to.be.equal(true);
      
    });
    
    it('é chamado o método "json" com a frase "filme não encontrado"', async () => {
      await MoviesController.getById(request, response);
      
      expect(response.json.calledWith({ message: 'Filme não encontrado' })).to.be.true;
    });    
   
  });
  
  describe('quando existem filmes no banco de dados', () => {
    const request = {};
    const response = {};
    const movie = 
      {
        id: '604cb554311d68f491ba5781',
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      }
    ;
    
    before(() => {
      request.params = {};
      
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      
      sinon.stub(MoviesServices, 'getById').resolves(movie);
    });
    
    after(() => {
      MoviesServices.getById.restore();
    });
    
    it('é chamado o método "status" passando o código 200', async () => {
      await MoviesController.getById(request, response);
      
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    
    it('é chamado o método "json" passando uma array', async () => {
      await MoviesController.getById(request, response);
      
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });
    
    it('é chamado o método "json" com a lista de filmes', async () => {
      await MoviesController.getById(request, response);
      
      expect(response.json.calledWith(movie)).to.be.equal(true);
    });
  });
})
