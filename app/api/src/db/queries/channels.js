import db from '../connection'

async function getAllChannels() {
  const channels = await db('channels').select()

  return channels
}

async function getChannelById(id) {
  const channel = await db('channels').where({ id }).first()

  return channel
}

async function createChannel(req) {
  const [channel] = await db('channels')
    .insert({
      name: req.body.name,
      workspaceId: req.body.workspaceId,
    })
    .returning('*')

  return channel
}
export { getAllChannels, getChannelById, createChannel }
