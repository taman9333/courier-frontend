import Axios from 'axios';

export default function setAuthorizationToken(token) {
    if (token) {
        Axios.defaults.headers.common['jwtToken'] = `${token}`;
    } else {
        delete Axios.defaults.headers.common['Authorization'];
    }
}
