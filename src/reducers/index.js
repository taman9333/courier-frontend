import {combineReducers} from 'redux';
import CourierRegistrations from './CourierRegistrationsReducer';
import CourierLogins from './CourierLoginsReducer';
import CourierAuth from './CourierAuthReducer';
const rootReducer = combineReducers({
    CourierRegistrations,
    CourierAuth,
    CourierLogins,
})

export default rootReducer;
