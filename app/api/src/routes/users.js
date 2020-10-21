import express from 'express'
import { getAllUsers } from '../db/queries/users'

const router = express.Router()

// GET

router.get('/users', async (req, res) => {
  try {
    const users = await getAllUsers()

    res.status(200).json({
      status: 'success',
      users,
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message || 'something went wrong',
    })
  }
})

// GET
// POST
// PUT
// DELETE

export default router
