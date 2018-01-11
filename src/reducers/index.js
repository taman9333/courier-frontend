import {combineReducers} from 'redux';
import CourierRegistrations from './CourierRegistrationsReducer';
import CourierLogins from './CourierLoginsReducer';
import Courier from './CourierReducer';
import clientReducer from './client';
import orderReducer from './order';
import flashMessageReducer from './flashMessage'
import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({
    CourierRegistrations,
    CourierLogins,
    Courier,
    client:clientReducer,
    order:orderReducer,
    flashMessage:flashMessageReducer,
    loadingBar: loadingBarReducer,

})

export default rootReducer;
