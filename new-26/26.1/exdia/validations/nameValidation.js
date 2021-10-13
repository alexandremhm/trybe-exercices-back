const nameValidation = (req, res, next) => {
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    return res.status(400).json({ "error": "true", "message": "name deve ser válido" })
  }

  next();
};

module.exports = nameValidation;
