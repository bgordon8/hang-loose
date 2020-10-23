import { FETCH_MESSAGES, CREATE_MESSAGE } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      }
    case CREATE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }

    default:
      return state
  }
}
