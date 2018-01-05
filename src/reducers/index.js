import pagination from './pagination'
import error from './error'
import entities from './entities'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  entities,
  pagination,
  error,
})

export default rootReducer
