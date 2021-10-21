const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { ObjectId } = require('mongodb');

const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/moviesModel');

describe('Busca um filme específico', () => { 
  
  const expectedMovie = {
    id: '604cb554311d68f491ba5781',
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  const ID_EXAMPLE = '604cb554311d68f491ba5781';
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  let connectionMock; 
  const DBServer = new MongoMemoryServer();
  
  before(async () => {
    const URLMock = await DBServer.getUri();  
    connectionMock = await MongoClient.connect(URLMock, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('model_example'));
    
    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });
  
  after(() => {
    mongoConnection.getConnection.restore();
  });
  
  describe('Quando o filme é encontrado', async () => {

    before(async () => {
      const moviesCollection = await connectionMock.collection('movies');
      await moviesCollection.insertOne({
        _id: ObjectId(ID_EXAMPLE),
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });
    });

    it('retorna um array com um objeto contendo as propriedades do filme', async () => {
      const movie = await MoviesModel.getById(expectedMovie.id);

      expect(movie).to.be.a('object');
      expect(movie).to.not.be.empty;  
      expect(movie).to.have.property('id');
      expect(movie).to.have.property('title');
      expect(movie).to.have.property('directedBy');
      expect(movie).to.have.property('releaseYear');
      expect(movie).to.be.deep.equal(expectedMovie);
    });
  });

  describe('Quando não é encontrado o filme', () => {
    it('retorna um array vazio', async () => {
      const movie = await MoviesModel.getById('604cb554311d68f491ba5782');
      expect(movie).to.be.null;
    });
  });
});
