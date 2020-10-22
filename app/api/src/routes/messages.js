import express from 'express'
import { getAllMessages, getMessageById } from '../db/queries/messages'

const router = express.Router()

// GET

router.get('/messages', async (req, res) => {
  try {
    const messages = await getAllMessages()

    res.status(200).json({
      status: 'success',
      messages,
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message || 'something went wrong',
    })
  }
})

router.get('/messages/:id', async (req, res) => {
  try {
    const message = await getMessageById(parseInt(req.params.id))

    res.status(200).json({
      status: 'success',
      message,
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message || 'something went wrong',
    })
  }
})

export default router
