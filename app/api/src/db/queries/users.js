import db from '../connection'

async function getAllUsers() {
  const users = await db('users').select()

  return users
}

async function getUserById(id) {
  const user = await db('users').where({ id }).first()

  return user
}

async function createUser(req) {
  const [user] = await db('users')
    .insert({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    })
    .returning('*')

  return user
}

async function updateUser(req) {
  const [user] = await db('users')
    .where({
      id: req.params.id,
    })
    .update({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    })
    .returning('*')

  return user
}

async function deleteUser(id) {
  const [user] = await db('users').where({ id }).del().returning('*')

  return user
}

export { getAllUsers, getUserById, createUser, updateUser, deleteUser }
