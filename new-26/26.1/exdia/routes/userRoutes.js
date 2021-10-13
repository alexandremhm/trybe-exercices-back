const express = require('express');
const nameValidation = require('../validations/nameValidation');
const emailValidation = require('../validations/emailValidation');
const passwordValidation = require('../validations/passwordValidation');
const userIdValidation = require('../validations/userValidation');


const router = express.Router();
const { insertUser, getAllUsers, getUserById, updateUserInfos } = require('../models/userModel')

router.get('/:id', userIdValidation, async (req, res) => {
  const { id } = req.params;
  try{
    const foundUser = await getUserById(id);
    return res.status(200).json(foundUser);
  }
  catch(error) {
    res.status(404).json({ "error": "true", "message": "Usuário não encontrado" })
  }
});

router.get('/', async (_req, res) => {
    const users = await getAllUsers()
    if (users.length === 0) return res.status(200).send([])

    return res.status(200).json(users);
});

router.post('/', nameValidation, emailValidation, passwordValidation, async (req, res) => {
  const { firstName, lastName, email, password, _id: id } = req.body
  const newUser = await insertUser( { id, firstName, lastName, email, password });

  return res.status(201).json({ "message": "created" })  
});

router.put('/:id', nameValidation, emailValidation, passwordValidation, async (req, res) => {
  const { firstName, lastName, email, password } = req.body
  const { id } = req.params

  try {
    const updatedUser = await updateUserInfos(id, { firstName, lastName, email, password });
    return res.status(200).json(updatedUser);
  }
  catch(error) {
    res.status(404).json({ "error": "true", "message": "Usuário não encontrado" })
  }
});

module.exports = router;
