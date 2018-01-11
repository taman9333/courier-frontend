import { connect } from 'react-redux';
import UpdateForm from '../components/UpdateCourierProfileForm';
import { updateCourierLoading, updateCourier, updateCourierSuccess, updateCourierFailure } from '../actions/CourierActions.js';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import history from '../history'
import Axios from 'axios'
// import { updateCourierProfileApi } from '../apiConfig';


const mapStateToProps = (state) => {
    return {
        courier: state.Courier.courier,
        updating: state.Courier.updating,
        errorUpdating: state.Courier.updating,
        updateFlashMessage:state.Courier.updateFlashMessage
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        updateCourier: (courier) => {
            dispatch(updateCourierLoading());
            dispatch(updateCourier(courier)).then(response => { 
                if(response.payload.status < 400){
                    const courier = response.payload.data.courier;
                    dispatch(updateCourierSuccess(courier));
                    history.push('/courier')
                }else{
                    dispatch(updateCourierFailure(response));
                }
            })
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);

