import { combineReducers } from 'redux'
import channel from './channel-reducer'
import auth from './auth-reducer'

const rootReducer = combineReducers({
  auth,
  channel,
})

export default rootReducer
