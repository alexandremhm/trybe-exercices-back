const rescue = require('express-rescue');
const service = require('../services/User');
const Joi = require('joi');

const getUserById = (rescue(async (req, res) => {
  const { id } = req.params;
    const foundUser = await service.getUserById(id);
    return res.status(200).json(foundUser); 
}));

const getAllUsers = (rescue(async (req, res) => {
    const users = await service.getAllUsers();
    return res.status(200).json(users); 
}));

const insertUser = (rescue(async (req, res, next) => {

  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required(),
    lastName: Joi.string().not().empty().required(),
    email: Joi.string().not().empty().required(),
    password: Joi.not().empty().required(6),
  })
  .validate(req.body);

  if (error) {
    return next(error);
  }


  const { firstName, lastName, email, password, _id: id } = req.body
  const newUser = await service.insertUser( { id, firstName, lastName, email, password });

  if (newUser.error) return next(newUser.error);


  return res.status(201).json({ "message": "created" })  
}));

const updateUserInfos = (rescue(async (req, res) => {
  const { firstName, lastName, email, password } = req.body
  const { id } = req.params

  const updatedUser = await service.updateUserInfos(id, { firstName, lastName, email, password });
  return res.status(200).json(updatedUser);

}));


module.exports = { insertUser, getAllUsers, getUserById, updateUserInfos } ;
