import {combineReducers} from 'redux';
import CourierRegistrations from './CourierRegistrationsReducer';
import CourierLogins from './CourierLoginsReducer';
import CourierProfile from './CourierProfileReducer';
import CourierHeader from './CourierHeaderReducer';
import clientReducer from './client'
import orderReducer from './order'
import flashMessageReducer from './flashMessage'
import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({

  client:clientReducer,
  order:orderReducer,
  flashMessage:flashMessageReducer,
  loadingBar: loadingBarReducer,

  CourierRegistrations,
  CourierLogins,
  CourierProfile,
  CourierHeader


})

export default rootReducer;
