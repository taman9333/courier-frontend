import Axios from 'axios';
import { courierRegistrationsApi } from '../apiConfig';

export const ADD_COURIER_LOADING = 'ADD_COURIER_LOADING';
export const ADD_COURIER = 'ADD_COURIER';
export const ADD_COURIER_SUCCESS = 'ADD_COURIER_SUCCESS';
export const ADD_COURIER_FAILURE = 'ADD_COURIER_FAILURE';

export const addCourierLoading = () => {
    return {
        type: ADD_COURIER_LOADING
    }
}

export const addCourier = (courier) => {
    const payload = Axios.post(courierRegistrationsApi, courier);
    return {
        type: ADD_COURIER,
        payload
    }
}

export const addCourierSuccess = (response) => {
    return {
        type: ADD_COURIER_SUCCESS,
        // courier
        message:response.payload.data
    }
}
export const addCourierFailure = (error) => {
    return {
        type: ADD_COURIER_FAILURE,
        error:error.payload.response.data.errors
    }
}