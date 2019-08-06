import { combineReducers } from 'redux'
import TaskReducer from './taskreducer'

const rootReducer = combineReducers({
  task: TaskReducer
})

export default rootReducer