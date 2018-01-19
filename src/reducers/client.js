// import * as userActions from '../actions/user'
import {
          LOGIN_CLIENT_LOADING, LOGIN_CLIENT_SUCCESS,
          SHOW_CLIENT_SUCCESS, LOGOUT_CLIENT,
          UPDATE_CLIENT_LOADING, UPDATE_CLIENT_SUCCESS, UPDATE_CLIENT_FAILURE
        }  from '../actions/client'

const INITIAL_STATE = {
  client:{},
  loading:false,
  error:null,
  updating: false,
	updateFlashMessage:{}
  // loginFlashMessage:{},
  // registerFlashMessage:{}
}

export default function(currentState = INITIAL_STATE, action){
  switch(action.type){
    // case CREATE_CLIENT_LOADING:
    //   return {...currentState, loading:true}
    //   break;
    // case CREATE_CLIENT_SUCCESS:
    //   return {...currentState, loginFlashMessage:action.data, loading:false, registerFlashMessage:{}}
    //   //return {...currentState, loginFlashMessage:action.data, loading:false}
    //   break;
    // case CREATE_CLIENT_FAILURE:
    //   return {...currentState, registerFlashMessage:action.error, loading:false, loginFlashMessage:{}}
    //   //return {...currentState, registerFlashMessage:action.error, loading:false}
    //   break;
    case LOGIN_CLIENT_LOADING:
      return {...currentState, loading:true}
      break;
    case LOGIN_CLIENT_SUCCESS:
      return {...currentState, loading:false, client:action.data.client}
      break;
    // case LOGIN_CLIENT_FAILURE:
    //   return {...currentState, loading:false, loginFlashMessage:action.error}
    //   break;
    case SHOW_CLIENT_SUCCESS:
      return {...currentState, client:action.data.client}
      break;
    case LOGOUT_CLIENT:
    return {...currentState, client:{}}
      break;
    case UPDATE_CLIENT_LOADING:
      return {...currentState, updating: true};
      break;
		case UPDATE_CLIENT_SUCCESS:
			return {...currentState, updating: false, updateFlashMessage:action.message, client: {...currentState.client, username:action.client.username, email:action.client.email, phone:action.client.phone, img:action.client.img }};		
      break;
    case UPDATE_CLIENT_FAILURE:
			return {...currentState, updating: false, updateFlashMessage:action.error};
      break;
    default:
      return currentState;
  }
}
