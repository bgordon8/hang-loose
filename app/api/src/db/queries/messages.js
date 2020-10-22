import db from '../connection'

async function getAllMessages() {
  const messages = await db('messages').select()

  return messages
}

async function getMessageById(id) {
  const message = await db('messages').where({ id }).first()

  return message
}

async function createMessage(req) {
  const [message] = await db('messages')
    .insert({
      channelId: req.body.channelId,
      authorId: req.body.authorId,
      content: req.body.content,
    })
    .returning('*')

  return message
}

export { getAllMessages, getMessageById, createMessage }
