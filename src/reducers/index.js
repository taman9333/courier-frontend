import {combineReducers} from 'redux'
import clientReducer from './client'

const rootReducer = combineReducers({
  client:clientReducer
})

export default rootReducer;
