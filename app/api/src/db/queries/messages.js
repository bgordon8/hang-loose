import db from '../connection'

async function getAllMessages() {
  const messages = await db('messages').select()

  return messages
}

async function getMessageById(id) {
  const message = await db('messages').where({ id }).first()

  return message
}

export { getAllMessages, getMessageById }
