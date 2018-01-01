import {combineReducers} from 'redux';
import CourierRegistrations from './CourierRegistrationsReducer';
import CourierLogins from './CourierLoginsReducer';
import CourierProfile from './CourierProfileReducer';
import CourierHeader from './CourierHeaderReducer';


const rootReducer = combineReducers({
    CourierRegistrations,
    CourierLogins,
    CourierProfile,
    CourierHeader
})

export default rootReducer;
