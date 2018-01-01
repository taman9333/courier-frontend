import Axios from 'axios'
import {createOrderApi} from '../apiConfig.js'

/**
  // Action Types
*/

  // create order

export const CREATE_ORDER_LOADING = 'CREATE_ORDER_LOADING';

export const CREATE_ORDER = 'CREATE_ORDER';

export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';

export const CREATE_ORDER_FAILURE = 'CREATE_ORDER_FAILURE';


/**
  // Action Types
*/

  // create order

export function createOrderLoading(){
  return{
    type:CREATE_ORDER_LOADING
  }
}

export function createOrder(id, order){
  const payload = Axios.post(createOrderApi(id), order)
  return{
    type:CREATE_ORDER,
    payload
  }
}

export function createOrderSuccess(response){
  return{
    type:CREATE_ORDER_SUCCESS,
    data:response.payload.data.message
  }
}

export function createOrderFailure(error){
  return{
    type:CREATE_ORDER_FAILURE,
    error:error.payload.response.data.errors
  }
}
