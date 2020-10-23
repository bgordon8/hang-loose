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
  const user = await db('users').where({ id: message.authorId }).first('username')
  message.username = user.username
  return message
}

async function updateMessage(req) {
  const [message] = await db('messages')
    .where({ id: req.params.id })
    .update({
      channelId: req.body.channelId,
      authorId: req.body.authorId,
      content: req.body.content,
    })
    .returning('*')

  return message
}

async function deleteMessage(id) {
  const [message] = await db('messages').where({ id }).del().returning('*')

  return message
}
export { getAllMessages, getMessageById, createMessage, updateMessage, deleteMessage }
