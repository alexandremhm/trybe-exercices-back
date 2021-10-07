const express = require('express');

const app = express();

app.use(express.json())

const authMiddleware = (req, res, next) => {
  const { userName, email, password } = req.body;

  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (userName.length < 3) {
    return res.status(400).json({ "message": "invalid data" });
  }
  if (!regex.test(email)) {
    console.log(regex.test(email));
    return res.status(400).json({ "message": "invalid email" });
  }
  if (password.length < 4) {
    return res.status(400).json({ "message": "invalid data" });
  }
  next();
};

module.exports = authMiddleware;
