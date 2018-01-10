import {
	SHOW_COURIER_SUCCESS, COURIER_LOGOUT, UPDATE_COURIER_LOADING, UPDATE_COURIER_SUCCESS, UPDATE_COURIER_FAILURE
	// , RESET_PASSWORD
} from '../actions/CourierActions';

const INITIAL_STATE = {
	courier: {},
	updating: false,
	updateFlashMessage:{}
	// old_password:'',
	// new_password:'',
	// new_password_confirmation:''
}

export default function(currentState = INITIAL_STATE, action) {
	switch (action.type) {
		case SHOW_COURIER_SUCCESS:
			return {...currentState, courier:action.courier};
			// break;
		case UPDATE_COURIER_LOADING:
			return {...currentState, updating: true};
		case UPDATE_COURIER_SUCCESS:
			return {...currentState, updating: false, updateFlashMessage:action.message, courier: {...currentState.courier, username:action.courier.username, email:action.courier.email, phone:action.courier.phone, img:action.courier.img }};		
		case UPDATE_COURIER_FAILURE:
			return {...currentState, updating: false, updateFlashMessage:action.error};
			case COURIER_LOGOUT:
			return {...currentState, courier:{}};
			// break;
		// case RESET_PASSWORD:
		// 	return {...currentState, old_password:action.old_password,new_password:action.new_password, new_password_confirmation:action.new_password_confirmation}
		default:
			return currentState;
	}
}

