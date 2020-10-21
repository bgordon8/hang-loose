import db from '../connection'

async function getAllWorkspaces() {
  const workspaces = await db('workspaces').select()

  return workspaces
}
async function getWorkspaceById(id) {
  const workspace = await db('workspaces').where({ id }).first()

  return workspace
}
export { getAllWorkspaces, getWorkspaceById }
