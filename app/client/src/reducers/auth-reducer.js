import { AUTH_USER, FETCH_USER, UNAUTH_USER } from '../actions/types'

const initialState = {
  user: null,
  authenticated: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: true,
      }
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
      }
    case UNAUTH_USER:
      return {
        ...state,
        user: null,
        authenticated: false,
      }

    default:
      return state
  }
}
