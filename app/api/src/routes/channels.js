import express from 'express'
import { getAllChannels, getChannelById } from '../db/queries/channels'

const router = express.Router()

// GET

router.get('/channels', async (req, res) => {
  try {
    const channels = await getAllChannels()

    res.status(200).json({
      status: 'success',
      channels,
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message || 'something went wrong',
    })
  }
})

//GET
router.get('/channels/:id', async (req, res) => {
  try {
    const channel = await getChannelById(parseInt(req.params.id))

    res.status(200).json({
      status: 'success',
      channel,
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message || 'something went wrong',
    })
  }
})

export default router
