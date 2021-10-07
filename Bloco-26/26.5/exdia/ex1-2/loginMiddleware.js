const express = require('express');

const app = express();

app.use(express.json())

const loginMiddleware = (req, res, next) => {
  const { email, password } = req.body;

  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  if (!regex.test(email)) {
    return res.status(400).json({ "message": "email or password is incorrect" });
  }
  if (password.length < 4) {
    return res.status(400).json({ "message": "email or password is incorrect" });
  }
  next();
};

module.exports = loginMiddleware;
