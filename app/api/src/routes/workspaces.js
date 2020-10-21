import express from 'express'
import { getAllWorkspaces } from '../db/queries/workspaces'

const router = express.Router()

// GET

router.get('/workspaces', async (req, res) => {
  try {
    const workspaces = await getAllWorkspaces()

    res.status(200).json({
      status: 'success',
      workspaces,
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message || 'something went wrong',
    })
  }
})

//GET
//POST
//PUT
//DELETE

export default router
