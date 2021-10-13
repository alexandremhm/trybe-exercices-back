const passwordValidation = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length < 6) {
    return res.status(400).json({ "error": "true", "message": "password deve ser válido" })
  }

  next();
};

module.exports = passwordValidation;
