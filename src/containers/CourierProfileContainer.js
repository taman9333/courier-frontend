import { connect } from 'react-redux';
import Profile from '../components/CourierProfile.js';
import { showCourier } from '../actions/CourierActions.js';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { courierApi } from '../apiConfig';
// import history from '../history'
import Axios from 'axios'



const mapStateToProps = (state) => {
    return {
        courier: state.courier,
        isAuthenticated: state.isAuthenticated
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        showCourier: (id) => {
            Axios.get(courierApi).then(response => {
                dispatch(showCourier(response.courier))
            })
            .catch(error => {
            console.log(error)
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
