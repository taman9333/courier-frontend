import{CREATE_ORDER_LOADING, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE} from '../actions/order'

const INITIAL_STATE = {
  orderFlashMessage:{},
  loading:false
  // ,error:null
}

export default function(currentState = INITIAL_STATE, action){
  switch(action.type){
    case CREATE_ORDER_LOADING:
      return {...currentState, loading:true};
      break;
    case CREATE_ORDER_SUCCESS:
      return {...currentState, orderFlashMessage:action.data, loading:false};
      break;
    case CREATE_ORDER_FAILURE:
      return{...currentState, orderFlashMessage:action.error, loading:false};
      break;
    default:
      return currentState;
  }
}
