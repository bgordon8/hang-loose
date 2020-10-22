import bcrypt from 'bcryptjs'
import db from '../connection'

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

export { createNewUser }
