import { CREATE_CLIENT_LOADING, CREATE_CLIENT_SUCCESS, CREATE_CLIENT_FAILURE, LOGIN_CLIENT_FAILURE }  from '../actions/client'
import{ CREATE_ORDER_LOADING, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE } from '../actions/order'
const EMPTY_FLASH_MESSAGE = 'EMPTY_FLASH_MESSAGE';

const INITIAL_STATE = {
  flashMessage:{},
  loading:false
}

export default function(currentState = INITIAL_STATE, action){
  switch(action.type){
    case CREATE_CLIENT_LOADING:
      return {...currentState, loading:true};
      break;
    case CREATE_CLIENT_SUCCESS:
      return {...currentState, flashMessage:action.data}
      break;
    case CREATE_CLIENT_FAILURE:
      return {...currentState, flashMessage:action.error}
      break;

    case LOGIN_CLIENT_FAILURE:
      return {...currentState, flashMessage:action.error}


    case CREATE_ORDER_LOADING:
      return {...currentState, loading:true};
      break;
    case CREATE_ORDER_SUCCESS:
      return {...currentState, flashMessage:action.data}
      break;
    case CREATE_ORDER_FAILURE:
      return {...currentState, flashMessage:action.error}
      break;

    case EMPTY_FLASH_MESSAGE:
      return {...currentState, flashMessage:{}}
      break

    default:
      return currentState
  }
}
