import { connect } from 'react-redux';
import Form from '../components/CourierRegistrationForm';
import { addCourierLoading, addCourier, addCourierSuccess, addCourierFailure } from '../actions/CourierRegistrationsActions.js';
import history from '../history'

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
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
