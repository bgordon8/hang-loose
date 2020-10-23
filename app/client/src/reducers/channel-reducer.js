import { FETCH_MESSAGES } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      }

    default:
      return state
  }
}
