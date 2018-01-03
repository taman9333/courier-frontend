
import {combineReducers} from 'redux';
import CourierRegistrations from './CourierRegistrationsReducer';
import CourierLogins from './CourierLoginsReducer';
import CourierProfile from './CourierProfileReducer';
import CourierHeader from './CourierHeaderReducer';
import clientReducer from './client';
import orderReducer from './order';

const rootReducer = combineReducers({
    CourierRegistrations,
    CourierLogins,
    CourierProfile,
    CourierHeader,
    client:clientReducer,
    order:orderReducer
})

export default rootReducer;
