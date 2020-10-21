import express from 'express'
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../db/queries/users'

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
router.get('/users/:id', async (req, res) => {
  try {
    const user = await getUserById(parseInt(req.params.id))

    res.status(200).json({
      status: 'success',
      user,
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message || 'something went wrong',
    })
  }
})

// POST
router.post('/users', async (req, res) => {
  try {
    const user = await createUser(req)

    res.status(200).json({
      status: 'success',
      user,
    })
  } catch (error) {
    req.status(500).json({
      status: 'error',
      message: error.message || 'something went wrong',
    })
  }
})

// PUT
router.put('/users/:id', async (req, res) => {
  try {
    const user = await updateUser(req)

    res.status(200).json({
      status: 'success',
      user,
    })
  } catch (error) {
    req.status(500).json({
      status: 'error',
      message: error.message || 'something went wrong',
    })
  }
})

// DELETE
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await deleteUser(parseInt(req.params.id))

    res.status(200).json({
      status: 'success',
      user,
    })
  } catch (error) {
    req.status(500).json({
      status: 'error',
      message: error.message || 'something went wrong',
    })
  }
})

export default router
