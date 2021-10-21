const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/moviesModel');
const MoviesService = require('../../services/movieService');

describe('quando não existe o filme', () => {
  before(() => {
    sinon.stub(MoviesModel, 'getById')
      .resolves(false);
  });

  after(() => {
    MoviesModel.getById.restore();
  });

  it('retorna um array', async () => {
    const response = await MoviesService.getById('604cb554311d68f491ba5781');
    expect(response).to.be.false;
  });
});

describe('quando existe o filme', () => {

  const expectedMovie = {
    id: '604cb554311d68f491ba5781',
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(() => {
    sinon.stub(MoviesModel, 'getById')
      .resolves(expectedMovie);
  });

  after(() => {
    MoviesModel.getById.restore();
  });

  it('retorna um array', async () => {
    const response = await MoviesService.getById(expectedMovie);
    expect(response).to.be.a('object');
    expect(response).to.not.be.empty;  
    expect(response).to.have.property('id');
    expect(response).to.have.property('title');
    expect(response).to.have.property('directedBy');
    expect(response).to.have.property('releaseYear');
    expect(response).to.be.deep.equal(expectedMovie);
  });
 
});
