import Axios from 'axios';
import { courierSessionsApi } from '../apiConfig';

export const COURIER_LOGIN_LOADING = 'COURIER_LOGIN_LOADING';
export const COURIER_LOGIN = 'COURIER_LOGIN';
export const COURIER_LOGIN_SUCCESS = 'COURIER_LOGIN_SUCCESS';
export const COURIER_LOGIN_FAILURE = 'COURIER_LOGIN_FAILURE';

export const courierLoginLoading = () => {
    return {
        type: COURIER_LOGIN_LOADING
    }
}

export const courierLogin = (courier) => {
    const payload = Axios.post(courierSessionsApi, {
        courier,
        logging: false
    });
    return {
        type: COURIER_LOGIN,
        payload
    }
}

export const courierLoginSuccess = (courier) => {
    return {
        type: COURIER_LOGIN_SUCCESS,
        courier
    }
}
export const courierLoginFailure = (error) => {
    return {
        type: COURIER_LOGIN_FAILURE,
        error
    }
}