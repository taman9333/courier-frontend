
import {combineReducers} from 'redux';
import CourierRegistrations from './CourierRegistrationsReducer';
import CourierLogins from './CourierLoginsReducer';
import Courier from './CourierReducer';
import clientReducer from './client';
import orderReducer from './order';

const rootReducer = combineReducers({
    CourierRegistrations,
    CourierLogins,
    Courier,
    client:clientReducer,
    order:orderReducer
})

export default rootReducer;
