import { connect } from 'react-redux';
import Form from '../components/CourierRegistrationForm';
import { addCourierLoading, addCourier, addCourierSuccess, addCourierFailure } from '../actions/CourierRegistrationsActions.js';
import history from '../history'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const mapStateToProps = (state) => {
    return {
        couriers: state.CourierRegistrations.courier,
        adding: state.CourierRegistrations.adding,
        errorAdding: state.CourierRegistrations.adding,
        registerFlashMessage:state.CourierRegistrations.registerFlashMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCourier: (courier) => {
            dispatch(addCourierLoading());
            dispatch(showLoading())
            setTimeout(function(){
                dispatch(addCourier(courier)).then(response => { 
                    if(response.payload.status < 400){
                        // dispatch(addCourierSuccess(response.payload.courier));
                        dispatch(addCourierSuccess(response));
                        history.push('/login/courier')
                    }else{
                        // dispatch(addCourierFailure(response.payload.message));
                        dispatch(addCourierFailure(response));
                    }
                })
            },5000)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
