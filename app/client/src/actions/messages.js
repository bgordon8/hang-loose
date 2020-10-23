import axios from 'axios'
import { FETCH_MESSAGES } from './types'

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
