import axios from 'axios'
import { FETCH_MESSAGES, CREATE_MESSAGE } from './types'

export const fetchMessages = (channelId) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      const res = await axios.get(`http://localhost:3000/channel/${channelId}/messages`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })

      dispatch({ type: FETCH_MESSAGES, payload: res.data.messages })
    } catch (error) {
      console.log(error)
    }
  }
}

export const createMessage = (values) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      const res = await axios.post(
        `http://localhost:3000/messages`,
        {
          content: values.content,
          authorId: values.authorId,
          channelId: values.channelId,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )

      dispatch({ type: CREATE_MESSAGE, payload: res.data.message })
    } catch (error) {
      console.log(error)
    }
  }
}
