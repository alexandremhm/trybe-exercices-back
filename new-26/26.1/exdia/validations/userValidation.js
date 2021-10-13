const { ObjectId } = require('mongodb');

const userIdValidation = (req, res, next) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id) || !id) {
    return res.status(404).json({ "error": "true", "message": "Usuário não encontrado" })
  }

  next();
};

module.exports = userIdValidation;
