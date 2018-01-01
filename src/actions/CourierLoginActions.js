import Axios from 'axios';
import { courierSessionsApi } from '../apiConfig';

export const COURIER_LOGIN_LOADING = 'COURIER_LOGIN_LOADING';
export const COURIER_LOGIN = 'COURIER_LOGIN';
export const COURIER_LOGIN_SUCCESS = 'COURIER_LOGIN_SUCCESS';
export const COURIER_LOGIN_FAILURE = 'COURIER_LOGIN_FAILURE';
// export const SEND_RESET_PASSWORD_LINK = 'SEND_RESET_PASSWORD_LINK';

export const courierLoginLoading = () => {
    return {
        type: COURIER_LOGIN_LOADING
    }
}

export const courierLogin = (courier) => {
    const payload = Axios.post(courierSessionsApi, courier);
    return {
        type: COURIER_LOGIN,
        payload
    }
}

export const courierLoginSuccess = (response) => {
    return {
        type: COURIER_LOGIN_SUCCESS,
        // courier
        courier:response.payload.data.courier
    }
}
export const courierLoginFailure = (error) => {
    return {
        type: COURIER_LOGIN_FAILURE,
        error:error.payload.response.data
    }
}

// export const sendResetPasswordLink = (email) => {
//     return {
//         type: SEND_RESET_PASSWORD_LINK,
//         email
//     }
// }

