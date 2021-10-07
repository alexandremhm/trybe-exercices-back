const express = require('express');
const router = express.Router();
const authMiddleware = require('./authmiddleware');
const loginMiddleware = require('./loginMiddleware');

router.post(
  '/register', authMiddleware,
  (_req, res) => {
    res.status(201).json({ "message": "user created" });
  }
);

router.post(
  '/login', loginMiddleware,
  (_req, res) => {
    res.status(200).json({ "token": "86567349784e" });
  }
);

module.exports = router;
