import db from '../connection'

async function getAllUsers() {
  const users = await db('users').select()

  return users
}

export { getAllUsers }
