import Axios from 'axios'
import {updateClientProfileApi, newClientApi, loginClientApi} from '../apiConfig.js'

/**
  // Action Types
*/

// create client

export const CREATE_CLIENT_LOADING = 'CREATE_CLIENT_LOADING';
export const CREATE_CLIENT = 'CREATE_CLIENT';
export const CREATE_CLIENT_SUCCESS = 'CREATE_CLIENT_SUCCESS';
export const CREATE_CLIENT_FAILURE = 'CREATE_CLIENT_FAILURE';

// client login

export const LOGIN_CLIENT_LOADING = 'LOGIN_CLIENT_LOADING';
export const LOGIN_CLIENT = 'LOGIN_CLIENT';
export const LOGIN_CLIENT_SUCCESS = 'LOGIN_CLIENT_SUCCESS';
export const LOGIN_CLIENT_FAILURE = 'LOGIN_CLIENT_FAILURE';

// client show

export const SHOW_CLIENT_SUCCESS = 'SHOW_CLIENT_SUCCESS'

// client update

export const UPDATE_CLIENT_LOADING = 'UPDATE_CLIENT_LOADING'
export const UPDATE_CLIENT = 'UPDATE_CLIENT'
export const UPDATE_CLIENT_SUCCESS = 'UPDATE_CLIENT_SUCCESS'
export const UPDATE_CLIENT_FAILURE = 'UPDATE_CLIENT_FAILURE'

// client logout

export const LOGOUT_CLIENT = 'LOGOUT_CLIENT'

/**
  // Action Creators
*/

// create client

export function createClientLoading(){
  return{
    type:CREATE_CLIENT_LOADING
  }
}

export function createClient(client){
  const payload = Axios.post(newClientApi, client)
  return{
    type:CREATE_CLIENT,
    payload
  }
}

export function createClientSuccess(response){
  return{
    type:CREATE_CLIENT_SUCCESS,
    data:response.payload.data
  }
}

export function createClientFailure(error){
  return{
    type:CREATE_CLIENT_FAILURE,
    error:error.payload.response.data.errors
  }
}

//login client

export function loginClientLoading(){
  return{
    type:LOGIN_CLIENT_LOADING
  }
}

export function loginClient(client){
  const payload = Axios.post(loginClientApi, client)
  return{
    type:LOGIN_CLIENT,
    payload
  }
}

export function loginClientSuccess(response){
  return{
    type:LOGIN_CLIENT_SUCCESS,
    data:response.payload.data
  }
}

export function loginClientFailure(error){
  return{
    type:LOGIN_CLIENT_FAILURE,
    error:error.payload.response.data
  }
}

// client show

export function showClientSuccess(response){
  return{
    type:SHOW_CLIENT_SUCCESS,
    data:response.data
  }
}

// client update

export const updateClientLoading = () => {
  return {
      type: UPDATE_CLIENT_LOADING
  }
}

export const updateClient = (client) => {
  const payload = Axios.patch(updateClientProfileApi, client);
  return{
      type:UPDATE_CLIENT,
      payload
  }
}

export const updateClientSuccess = (client) => {
  return {
      type: UPDATE_CLIENT_SUCCESS,
      client
  }
}

export const updateClientFailure = (error) => {
  return {
      type: UPDATE_CLIENT_FAILURE,
      error:error.payload.response.data.errors
  }
}


// client logout

export function logoutClient(){
  return{
    type:LOGOUT_CLIENT
  }
}
