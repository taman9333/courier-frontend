import Axios from 'axios';
import { courierProfileApi, updateCourierProfileApi } from '../apiConfig';

export const SHOW_COURIER_SUCCESS = 'SHOW_COURIER_SUCCESS'
export const UPDATE_COURIER_LOADING = 'UPDATE_COURIER_LOADING'
export const UPDATE_COURIER = 'UPDATE_COURIER'
export const UPDATE_COURIER_SUCCESS = 'UPDATE_COURIER_SUCCESS'
export const UPDATE_COURIER_FAILURE = 'UPDATE_COURIER_FAILURE'
export const COURIER_LOGOUT = 'COURIER_LOGOUT'
// export const RESET_PASSWORD = 'RESET_PASSWORD'

export const SHOW_COURIER = 'SHOW_COURIER'


export const showCourier = () => {
    const payload = Axios.get(courierProfileApi);
    return{
        type:SHOW_COURIER,
        payload
    }
}

export const showCourierSuccess = (response) => {
    return{
        type:SHOW_COURIER_SUCCESS,
        courier:response.payload.data.courier
    }
}


export const updateCourierLoading = () => {
    return {
        type: UPDATE_COURIER_LOADING
    }
}

export const updateCourier = (courier) => {
    const payload = Axios.patch(updateCourierProfileApi, courier);
    return{
        type:UPDATE_COURIER,
        payload
    }
}

export const updateCourierSuccess = (response) => {
    return {
        type: UPDATE_COURIER_SUCCESS,
        // courier
        message:response.payload.data
    }
}

export const updateCourierFailure = (error) => {
    return {
        type: UPDATE_COURIER_FAILURE,
        error:error.payload.response.data.errors
    }
}
  
export function courierLogout(){
    return{
        type:COURIER_LOGOUT
    }
}
  
// export function resetCourierPassword(event){
//     return{
//         type:RESET_PASSWORD,
//         // old_password: data.old_password,
//         new_password: data.new_password,
//         new_password_confirmation: data.new_password_confirmation
//     }
// }
