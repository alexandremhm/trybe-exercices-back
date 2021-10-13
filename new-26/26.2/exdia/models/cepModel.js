const connection = require('./connection');

const getAllCeps = async () => {
  const [cep] = await connection.execute(
      'SELECT * FROM ceps',
  );
  return cep;
 };

const getCepInfos = async (cepInput) => {
  const [cep] = await connection.execute(
      'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep=?',
      [cepInput]
  );
  return cep;
 };

const insertCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  await connection.execute(
    'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (? ,? ,? ,? ,?)',
    [cep, logradouro, bairro, localidade, uf]);
};

module.exports = { getCepInfos, insertCep, getAllCeps }
