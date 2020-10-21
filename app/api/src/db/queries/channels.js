import db from '../connection'

async function getAllChannels() {
  const channels = await db('channels').select()

  return channels
}

async function getChannelById(id) {
  const channel = await db('channels').where({ id }).first()

  return channel
}
export { getAllChannels, getChannelById }
