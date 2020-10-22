import db from '../connection'

async function getAllMessages() {
  const messages = await db('messages').select()

  return messages
}

export { getAllMessages }
