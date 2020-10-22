import bcrypt from 'bcryptjs'
import db from '../connection'
import { comparePass } from '../../utils'

async function createNewUser(req) {
  const salt = bcrypt.genSaltSync()
  const hash = bcrypt.hashSync(req.body.password, salt)

  const [user] = await db('users')
    .insert({
      email: req.body.email,
      username: req.body.username,
      password: hash,
    })
    .returning('*')
  delete user.password

  return user
}

async function getUserByEmail(req) {
  const user = await db('users').where({ email: req.body.email }).first()
  console.log(user)

  await comparePass(req.body.password, user.password)
  delete user.password

  return user
}

export { createNewUser, getUserByEmail }
