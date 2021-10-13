const rescue = require('express-rescue');
const service = require('../services/Cep');

const getPing = (_req, res) => {
  return res.status(200).json({ "message": "pong!" });
};

const getCep = async (req, res) => {
  const { cep } = req.params;

  const regex = /^\d{5}-?\d{3}$/;

  if (!regex.test(cep)) {
    return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });
  };

  const validCep = await service.getCep(cep);

  return res.status(200).json(validCep);
};

const insertCep = async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  
  const response = await service.insertNewCep({ cep, logradouro, bairro, localidade, uf });

  if (!response) {
    return res.status(400).json({ "error": { "code": "alreadyExists", "message": "CEP já existente" } });
  };

  return res.status(200).json({ cep, logradouro, bairro, localidade, uf });
};

const getAllCeps = async(_req, res) => {
  const ceps = await service.getAllCeps();
  return res.status(200).json(ceps);
};


module.exports = { getPing, getCep, insertCep, getAllCeps };
