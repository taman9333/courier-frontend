import {combineReducers} from 'redux'
import clientReducer from './client'
import orderReducer from './order'

const rootReducer = combineReducers({
  client:clientReducer,
  order:orderReducer
})

export default rootReducer;
