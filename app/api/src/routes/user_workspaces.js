import express from 'express'
import { getAllUserWorkspaces } from '../db/queries/user_workspaces'

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

export default router
