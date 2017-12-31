import { connect } from 'react-redux';
import Form from '../components/CourierLoginForm.js';
import { courierLoginLoading, courierLogin, courierLoginSuccess, courierLoginFailure } from '../actions/CourierLoginActions';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import history from '../history'
// import Axios from 'axios'



const mapStateToProps = (state) => {
    return {
        courier: state.CourierLogins.courier,
        logging: state.CourierLogins.logging,
        errorAdding: state.CourierLogins.error,
        flashMessage:state.CourierLogins.loginFlashMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        courierLogin: (courier) => {
            dispatch(courierLoginLoading());
            // setTimeout(() => {
                dispatch(courierLogin(courier)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(courierLoginSuccess(response.payload.courier));
                        const token = response.payload.data.auth_token;
                        localStorage.setItem('jwtToken', token);
                        dispatch(courierLoginSuccess(response))
                        setAuthorizationToken(token);
                        history.push('/clientprofile')
                    }else{
                        dispatch(courierLoginFailure(response.payload.message));
                    }
                })
            // }, 2000)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);


