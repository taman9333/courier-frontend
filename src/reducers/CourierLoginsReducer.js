import {
	COURIER_LOGIN_LOADING, COURIER_LOGIN_SUCCESS, COURIER_LOGIN_FAILURE
} from '../actions/CourierLoginsActions';

const INITIAL_STATE = {
	courier: {
		email: '',
		password: ''
	},
	logging: false,
	errorLogging: null
}

export default function(currentState = INITIAL_STATE, action) {
	switch (action.type) {
		case COURIER_LOGIN_LOADING:
			return {...currentState, logging: true};
		case COURIER_LOGIN_SUCCESS:
			return {...currentState, logging: false, courier: action.courier};
		case COURIER_LOGIN_FAILURE:
			return {...currentState, logging: false, errorLogging: action.error};
		default:
			return currentState;
	}
}


        
