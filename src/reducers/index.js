import {combineReducers} from 'redux'
import clientReducer from './client'
import orderReducer from './order'
import flashMessageReducer from './flashMessage'
import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({
  client:clientReducer,
  order:orderReducer,
  flashMessage:flashMessageReducer,
  loadingBar: loadingBarReducer
})

export default rootReducer;
