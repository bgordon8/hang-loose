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
  //   TODO: comment back in once user exists on req
  // await db('user_channels')
  // .insert({
  //   channelId: channel.id,
  //   userId: user.id
  // })

  return channel
}

async function updateChannel(req) {
  const [channel] = await db('channels')
    .where({ id: req.params.id })
    .update({
      name: req.body.name,
    })
    .returning('*')

  return channel
}

async function deleteChannel(id) {
  const [channel] = await db('channels').where({ id }).del().returning('*')

  return channel
}

export { getAllChannels, getChannelById, createChannel, updateChannel, deleteChannel }
