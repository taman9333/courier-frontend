import {
	ADD_COURIER_LOADING, ADD_COURIER_SUCCESS, ADD_COURIER_FAILURE
} from '../actions/CourierRegistrationsActions';

const INITIAL_STATE = {
	adding: false,
	registerFlashMessage:{}
}

export default function(currentState = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_COURIER_LOADING:
			return {...currentState, adding: true};
			// break;
		case ADD_COURIER_SUCCESS:
			return {...currentState, adding: false, registerFlashMessage:action.message};
			// break;
		case ADD_COURIER_FAILURE:
			return {...currentState, adding: false, registerFlashMessage:action.error};
			// break;
		default:
			return currentState;
	}
}

  