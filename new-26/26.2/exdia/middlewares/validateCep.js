const Joi = require('joi');

module.exports = validateCep = (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const regex = /^\d{5}-?\d{3}$/;

  if (!regex.test(cep)) {
    return res.status(400).json({ "error": { "code": "invalidData", "message": "Insira cep valido" } });
  };
  
  const { error } = Joi.object({
    logradouro: Joi.string().not().empty().required().messages({"string.required": "lodradouro é obrigatório"}),
    bairro: Joi.string().not().empty().required().messages({"string.required": "bairro é obrigatório"}),
    localidade: Joi.string().not().empty().required().messages({"string.required": "localidade é obrigatório"}),
    uf: Joi.string().not().empty().required().messages({"string.required": "uf é obrigatório"}),
    cep: Joi.number().messages({"string.required": "cep é obrigatório"})
  })
  .validate(req.body);

  if (error) {
    return res.status(400).json({ "error": { "code": "invalidData", "message": error.message || "insira dados válidos" } });
  };

  next();
};
