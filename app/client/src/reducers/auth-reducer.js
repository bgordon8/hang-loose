import { AUTH_USER } from '../actions/types'

const initialState = {
  authenticated: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        authenticated: true,
      }

    default:
      return state
  }
}
