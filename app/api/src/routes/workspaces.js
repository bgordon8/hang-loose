import express from 'express'
import {
  getAllWorkspaces,
  getWorkspaceById,
  createWorkspace,
  updateWorkspace,
} from '../db/queries/workspaces'

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
router.get('/workspaces/:id', async (req, res) => {
  try {
    const workspace = await getWorkspaceById(parseInt(req.params.id))

    res.status(200).json({
      status: 'success',
      workspace,
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message || 'something went wrong',
    })
  }
})

//POST
router.post('/workspaces', async (req, res) => {
  try {
    const workspace = await createWorkspace(req)

    res.status(200).json({
      status: 'success',
      workspace,
    })
  } catch (error) {
    req.status(500).json({
      status: 'error',
      message: error.message || 'something went wrong',
    })
  }
})

//PUT
router.put('/workspaces/:id', async (req, res) => {
  try {
    const workspace = await updateWorkspace(req)

    res.status(200).json({
      status: 'success',
      workspace,
    })
  } catch (error) {
    req.status(500).json({
      status: 'error',
      message: error.message || 'something went wrong',
    })
  }
})

//DELETE

export default router
