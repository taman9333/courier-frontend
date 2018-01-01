import { connect } from 'react-redux';
import Profile from '../components/CourierProfile.js';
import { showCourierSuccess } from '../actions/CourierActions.js';
import setAuthorizationToken from '../utils/setAuthorizationToken';
// import { courierProfileApi } from '../apiConfig';
import { courierProfileApi } from '../apiConfig';
// import history from '../history'
import Axios from 'axios'



const mapStateToProps = (state) => {
    return {
        courier: state.CourierProfile.courier,
        loading:state.CourierProfile.loading,
				error:state.CourierProfile.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showCourier: (id) => {
            Axios.get(courierProfileApi).then(response => {
                dispatch(showCourierSuccess(response))
            })
            .catch(error => {
            	console.log(error)
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
