const connection = require('../connections/mongoConnection');
const { ObjectId } = require('mongodb');

const insertUser = async ({ firstName, lastName, email, password }) => {
  return connection()
    .then((db) => db.collection('users').insertOne({
      firstName,
      lastName,
      email,
      password,
    }))
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
}

const getAllUsers = async () => {
  return await connection()
    .then((db) => db.collection('users').find().toArray())
}

const getUserById = async (id) => {

  const userData = await connection()
    .then((db) => db.collection('users').findOne(new ObjectId(id)));
  
  if (!userData) return null;

  return userData;
}

const updateUserInfos = async (id, { firstName, lastName, email, password }) => {
  const updateUser = await connection()
    .then((db) => {
      const userId = new ObjectId(id);

      const newData = {firstName, lastName, email, password }
      return db.collection('users')
        .findOneAndUpdate({ _id: userId }, { $set: newData }, { returnOriginal: false })
        .then((result) => result.value);
    })

    return updateUser;
}

module.exports = { insertUser, getAllUsers, getUserById, updateUserInfos }
