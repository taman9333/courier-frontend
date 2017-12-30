import {
	ADD_COURIER_LOADING, ADD_COURIER_SUCCESS, ADD_COURIER_FAILURE
} from '../actions/CourierRegistrationsActions';

const INITIAL_STATE = {
	courier: {
		username: '',
		email: '',
		password: '',
		passowrd_confirmation: '',
		phone: '',
		img: ''
	},
	adding: false,
	errorAdding: null
}

export default function(currentState = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_COURIER_LOADING:
			return {...currentState, adding: true};
		case ADD_COURIER_SUCCESS:
			return {...currentState, adding: false, courier: action.courier};
		case ADD_COURIER_FAILURE:
			return {...currentState, adding: false, errorAdding: action.error};
		default:
			return currentState;
	}
}


        
