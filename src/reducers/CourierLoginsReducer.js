import {
	COURIER_LOGIN_LOADING, COURIER_LOGIN_SUCCESS, COURIER_LOGIN_FAILURE, SEND_RESET_PASSWORD_LINK
} from '../actions/CourierLoginActions';

const INITIAL_STATE = {
	courier: {
		email: '',
		password: ''
	},
	logging: false,
	errorLogging: null,
	isAuthenticated:false
}

export default function(currentState = INITIAL_STATE, action) {
	switch (action.type) {
		case COURIER_LOGIN_LOADING:
			return {...currentState, logging: true};
			// break;
		case COURIER_LOGIN_SUCCESS:
			return {...currentState, logging: false, courier: action.courier};
			// return {...currentState, loading:false, client:action.data.client, isAuthenticated:true}
		case COURIER_LOGIN_FAILURE:
			return {...currentState, logging: false, errorLogging: action.error};
		case SEND_RESET_PASSWORD_LINK:
			return {};
		default:
			return currentState;
	}
}

