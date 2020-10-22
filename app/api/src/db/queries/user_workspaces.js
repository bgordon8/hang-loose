import db from '../connection'

async function getAllUserWorkspaces() {
  const user_workspaces = await db('user_workspaces').select()

  return user_workspaces
}

async function getUserWorkspaceById(id) {
  const workspace = await db('user_workspaces').where({ id }).first()

  return workspace
}

async function createUserWorkspace(req) {
  const [workspace] = await db('user_workspaces')
    .insert({
      workspaceId: req.body.workspaceId,
      userId: req.body.userId,
    })
    .returning('*')
  console.log(workspace)
  return workspace
}
export { getAllUserWorkspaces, getUserWorkspaceById, createUserWorkspace }
