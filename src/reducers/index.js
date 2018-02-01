import user from './user'
import error from './error'
import entities from './entities'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  entities,
  error,
  user
})

export default rootReducer
