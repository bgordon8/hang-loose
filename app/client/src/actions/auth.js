import axios from 'axios'
import { AUTH_USER, FETCH_USER } from './types'

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

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      const res = await axios.get('http://localhost:3000/auth/user', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })

      dispatch({ type: FETCH_USER, payload: res.data.user })
    } catch (error) {
      console.log(error)
    }
  }
}
