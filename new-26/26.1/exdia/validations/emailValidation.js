const emailValidation = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ "error": "true", "message": "email deve ser válido" })
  }

  next();
};

module.exports = emailValidation;
