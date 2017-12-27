import {
	ADD_COURIER_LOADING, ADD_COURIER, ADD_COURIER_SUCCESS, ADD_COURIER_FAILURE
} from '../actions/CourierRegisterationsActions';

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
		case ADD_COURIER:
			return {...currentState, courier: action.courier};
		case ADD_COURIER_SUCCESS:
			return {...currentState, adding: false, items: [...currentState.items, action.courier]};
		case ADD_COURIER_FAILURE:
			return {...currentState, adding: false, errorAdding: action.error};
		default:
			return currentState;
	}
}


        
