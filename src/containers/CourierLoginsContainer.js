import { connect } from 'react-redux';
import Form from '../components/CourierLoginForm.js';
import { courierLoginLoading, courierLogin, courierLoginSuccess, courierLoginFailure } from '../actions/CourierLoginsActions.js';

const mapStateToProps = (state) => {
    return {
        courier: state.CourierLogins.courier,
        logging: state.CourierLogins.logging,
        errorAdding: state.CourierLogins.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        courierLogin: (courier) => {
            dispatch(courierLoginLoading());
            setTimeout(() => {
                dispatch(courierLogin(courier)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(courierLoginSuccess(response.payload.courier));
                    }else{
                        dispatch(courierLoginFailure(response.payload.message));
                    }
                })
            }, 2000)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);


