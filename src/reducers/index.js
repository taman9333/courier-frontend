
import {combineReducers} from 'redux';
import CourierRegistrations from './CourierRegistrationsReducer';
import CourierLogins from './CourierLoginsReducer';
import CourierProfile from './CourierProfileReducer';
import CourierHeader from './CourierHeaderReducer';
import clientReducer from './client';
import orderReducer from './order';
import Auctions from './AuctionsReducer';

const rootReducer = combineReducers({
    CourierRegistrations,
    CourierLogins,
    CourierProfile,
    CourierHeader,
    client:clientReducer,
    order:orderReducer,
    Auctions
})

export default rootReducer;
