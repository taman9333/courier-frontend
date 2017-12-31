import {
	SHOW_COURIER, COURIER_LOGOUT
	// , UPDATE_COURIER, RESET_PASSWORD
} from '../actions/CourierActions';

const INITIAL_STATE = {
	courier: {}
	// old_password:'',
	// new_password:'',
	// new_password_confirmation:''
}

export default function(currentState = INITIAL_STATE, action) {
	switch (action.type) {
		case SHOW_COURIER:
			return {...currentState, courier:action.courier};
			// break;
		// case UPDATE_COURIER:
		// 	return {...currentState, courier: {...this.state.courier, username:action.username, email:action.email, phone:action.phone, img:action.img }};		
		case COURIER_LOGOUT:
			return {...currentState, client:{}};
			// break;
		// case RESET_PASSWORD:
		// 	return {...currentState, old_password:action.old_password,new_password:action.new_password, new_password_confirmation:action.new_password_confirmation}
		default:
			return currentState;
	}
}



   
