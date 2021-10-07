const express = require('express');

const app = express();

app.use(express.json())

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token)
  if (token.length !== 12) {
    return res.status(400).json({ "message": "invalid token" });
  }
  next();
}

module.exports = validateToken;
