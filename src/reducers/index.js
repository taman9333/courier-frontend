import {combineReducers} from 'redux';
import CourierRegisterations from './CourierRegisterationsReducer';
// import CourierLogins from './CourierLoginsReducer';
import CourierAuth from './CourierAuthReducer';
const rootReducer = combineReducers({
    CourierRegisterations,
    CourierAuth
    // CourierLogins,
    // CourierAuth
})

export default rootReducer;
