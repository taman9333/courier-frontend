import {combineReducers} from 'redux';
import CourierRegistrations from './CourierRegistrationsReducer';
import CourierLogins from './CourierLoginsReducer';
import Courier from './CourierReducer';

const rootReducer = combineReducers({
    CourierRegistrations,
    CourierLogins,
    Courier
})

export default rootReducer;
