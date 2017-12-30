import { connect } from 'react-redux';
import Form from '../components/CourierRegistrationForm.js';
import { addCourierLoading, addCourier, addCourierSuccess, addCourierFailure } from '../actions/CourierRegistrationsActions.js';

const mapStateToProps = (state) => {
    return {
        couriers: state.CourierRegistrations.courier,
        adding: state.CourierRegistrations.adding,
        errorAdding: state.CourierRegistrations.adding
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCourier: (courier) => {
            dispatch(addCourierLoading());
            setTimeout(() => {
                dispatch(addCourier(courier)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(addCourierSuccess(response.payload.courier));
                    }else{
                        dispatch(addCourierFailure(response.payload.message));
                    }
                })
            }, 2000)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
