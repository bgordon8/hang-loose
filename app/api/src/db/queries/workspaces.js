import db from '../connection'

const slugify = (name) => name.split(' ').join('-').toLowerCase()

async function getAllWorkspaces() {
  const workspaces = await db('workspaces').select()

  return workspaces
}
async function getWorkspaceById(id) {
  const workspace = await db('workspaces').where({ id }).first()

  return workspace
}

async function createWorkspace(req) {
  const [user] = await db('workspaces')
    .insert({
      name: req.body.name,
      cname: slugify(req.body.name),
      ownerId: req.body.ownerId,
    })
    .returning('*')

  return user
}
export { getAllWorkspaces, getWorkspaceById, createWorkspace }
