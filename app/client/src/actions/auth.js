import axios from 'axios'
import { AUTH_USER } from './types'

export const loginUser = (values, cb) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('http://localhost:3000/auth/login', {
        email: values.email,
        password: values.password,
      })

      dispatch({ type: AUTH_USER })

      localStorage.setItem('token', res.data.token)
      cb()
    } catch (error) {
      console.log(error)
    }
  }
}
