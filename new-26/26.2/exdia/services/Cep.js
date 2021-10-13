const Cep = require('../models/cepModel');
const CepApi = require('../models/cepModelApi');


const getCep = async (cepInput) => {

  const cepInfos = await Cep.getCepInfos(cepInput);

  if (cepInfos.length === 0) {
    const getCepAPi = await CepApi.apiRequest(cepInput);
    const { cep, logradouro, bairro, localidade, uf } = getCepAPi;
    return { cep, logradouro, bairro, localidade, uf };
  };

  return cepInfos;
};

const verifyCepExists = async (cep) => {
  const cepSearch = await Cep.getCepInfos(cep);
  
  if (cepSearch.length === 0) {
    return true;
  }
  return false;
}

const insertNewCep = async ({ cep, logradouro, bairro, localidade, uf }) => {

  const cepExists = await verifyCepExists(cep);

  if (!cepExists) {
    return false;
  }

  const newCep = await Cep.insertCep({ cep, logradouro, bairro, localidade, uf });
  return true;
}

const getAllCeps = async () => {
  const allCeps = await Cep.getAllCeps()
  return allCeps;
}

module.exports = { getCep, insertNewCep, getAllCeps }
