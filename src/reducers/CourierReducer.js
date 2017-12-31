import {
	SHOW_COURIER, UPDATE_COURIER, COURIER_LOGOUT, RESET_PASSWORD
} from '../actions/CourierActions';

const INITIAL_STATE = {
	courier: {
		username:'',
        email:'',
        password:'',
        password_confirmation:'',
        phone:'',
        img:''
	},
	isAuthenticated:true,
	old_password:'',
	new_password:'',
	new_password_confirmation:''
}

export default function(currentState = INITIAL_STATE, action) {
	switch (action.type) {
		case SHOW_COURIER:
			return {...currentState, courier:action.courier, isAuthenticated:true};
			// break;
		case UPDATE_COURIER:
			return {...currentState, courier: {...this.state.courier, username:action.username, email:action.email, phone:action.phone, img:action.img }};		
		case COURIER_LOGOUT:
			return {...currentState, isAuthenticated:false};
		case RESET_PASSWORD:
			return {...currentState, old_password:action.old_password,new_password:action.new_password, new_password_confirmation:action.new_password_confirmation}
		default:
			return currentState;
	}
}



   
