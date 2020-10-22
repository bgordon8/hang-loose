import express from 'express'
import { getAllUserWorkspaces, getUserWorkspaceById } from '../db/queries/user_workspaces'

const router = express.Router()

// GET

router.get('/user_workspaces', async (req, res) => {
  try {
    const user_workspaces = await getAllUserWorkspaces()

    res.status(200).json({
      status: 'success',
      user_workspaces,
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message || 'something went wrong',
    })
  }
})

//GET
router.get('/user_workspaces/:id', async (req, res) => {
  try {
    const user_workspace = await getUserWorkspaceById(parseInt(req.params.id))

    res.status(200).json({
      status: 'success',
      user_workspace,
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message || 'something went wrong',
    })
  }
})

export default router
