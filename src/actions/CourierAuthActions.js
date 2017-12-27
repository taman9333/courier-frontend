import Axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';

export const SET_CURRENT_COURIER = 'SET_CURRENT_COURIER';
export const COURIER_LOGIN = 'COURIER_LOGIN';

export function setCurrentCourier(courier){
    type: SET_CURRENT_COURIER,
    courier
}


export function courierLogin(courier){
    type: COURIER_LOGIN,
    courier
}


// export function login(data){
//     return dispatch => {
//         return Axios.post('/api/auth', data).then(resposnse => {
//             const token = response.data.token;
//             localStorage.setItem('jwtToken', token);
//             setAuthorizationToken(token);
//         });
//     }
// }