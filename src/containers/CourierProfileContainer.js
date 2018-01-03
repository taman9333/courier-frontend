import { connect } from 'react-redux';
import Profile from '../components/CourierProfile';
import { showCourierSuccess } from '../actions/CourierActions.js';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { courierProfileApi } from '../apiConfig';
// import history from '../history'
import Axios from 'axios'



const mapStateToProps = (state) => {
    return {
        courier: state.CourierHeader.courier,
        loading:state.CourierHeader.loading,
		error:state.CourierHeader.error
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         showCourier: (id) => {
//             Axios.get(courierProfileApi).then(response => {
//                 dispatch(showCourierSuccess(response))
//             })
//             .catch(error => {
//             	console.log(error)
//             })
//         }
//     }
// }

export default connect(mapStateToProps)(Profile);
