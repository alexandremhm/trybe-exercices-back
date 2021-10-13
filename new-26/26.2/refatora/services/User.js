const User = require('../models/userModel');


const insertUser = async ({ firstName, lastName, email, password }) => {
  
  return User.insertUser({ firstName, lastName, email, password })
}

const getAllUsers = async () => {
  return User.getAllUsers();
}

const getUserById = async (id) => {
  const user = await User.getUserById(id);

  if (!user) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um usuário com o id ${id}`,
      },
    };
  }
  return user;
}

const updateUserInfos = async (id, { firstName, lastName, email, password }) => {
  return User.updateUserInfos(id, { firstName, lastName, email, password });
}

module.exports = { insertUser, getAllUsers, getUserById, updateUserInfos }
