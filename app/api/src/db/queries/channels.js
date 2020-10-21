import db from '../connection'

async function getAllChannels() {
  const channels = await db('channels').select()

  return channels
}

export { getAllChannels }
