import { connect } from 'react-redux';
import Form from '../components/CourierRegisterationForm.js';
import { addCourierLoading, addCourier, addCourierSuccess, addCourierFailure } from '../actions/CourierRegisterationsActions.js';

const mapStateToProps = (state) => {
    return {
        couriers: state.CourierRegisterations.courier,
        adding: state.CourierRegisterations.adding,
        errorAdding: state.CourierRegisterations.adding
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCourier: (courier, callback) => {
            dispatch(addCourierLoading());
            setTimeout(() => {
                dispatch(addCourier(courier)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(addCourierSuccess(response.payload.courier));
                        callback();
                    }else{
                        dispatch(addCourierFailure(response.payload.message));
                    }
                })
            }, 2000)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
