import db from '../connection'

async function getAllWorkspaces() {
  const workspaces = await db('workspaces').select()

  return workspaces
}

export { getAllWorkspaces }
