import db from '../connection'

async function getAllUserWorkspaces() {
  const user_workspaces = await db('user_workspaces').select()

  return user_workspaces
}

export { getAllUserWorkspaces }
