// import * as userActions from '../actions/user'
import {CREATE_CLIENT_LOADING, CREATE_CLIENT_SUCCESS, CREATE_CLIENT_FAILURE, LOGIN_CLIENT_LOADING, LOGIN_CLIENT_SUCCESS, LOGIN_CLIENT_FAILURE, SHOW_CLIENT_SUCCESS, LOGOUT_CLIENT} from '../actions/user'

const INITIAL_STATE = {
  client:{},
  loading:false,
  error:null,
  isAuthenticated:false
}

export default function(currentState = INITIAL_STATE, action){
  switch(action.type){
    case CREATE_CLIENT_LOADING:
      return {...currentState, loading:true}
      break;
    case CREATE_CLIENT_SUCCESS:
      return {...currentState, client:action.data, loading:false}
      break;
    case CREATE_CLIENT_FAILURE:
      return {...currentState, error:action.error, loading:false}
      break;
    case LOGIN_CLIENT_LOADING:
      return {...currentState, loading:true}
      break;
    case LOGIN_CLIENT_SUCCESS:
      return {...currentState, loading:false, client:action.data.client, isAuthenticated:true}
      break;
    case LOGIN_CLIENT_FAILURE:
      return {...currentState, loading:false}
      break;
    case SHOW_CLIENT_SUCCESS:
      return {...currentState, client:action.data.client, isAuthenticated:true}
      break;
    case LOGOUT_CLIENT:
    return {...currentState, client:{}, isAuthenticated:false}
      break;
    default:
      return currentState;
  }
}
