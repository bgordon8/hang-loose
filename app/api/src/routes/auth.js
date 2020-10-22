import express from 'express'
import { createNewUser, getUserByEmail } from '../db/queries/auth'
import { encodeToken } from '../utils'

const router = express.Router()

router.post('/auth/register', async (req, res) => {
  try {
    const user = await createNewUser(req)

    const { token } = await encodeToken(user)

    res.status(200).json({
      status: 'success',
      token,
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message || 'something went wrong',
    })
  }
})

router.post('/auth/login', async (req, res) => {
  try {
    const user = await getUserByEmail(req)

    const { token } = await encodeToken(user)

    res.status(200).json({
      status: 'success',
      token,
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message || 'something went wrong',
    })
  }
})

export default router
