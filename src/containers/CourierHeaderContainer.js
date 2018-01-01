import { connect } from 'react-redux';
import Header from '../components/CourierHeader.js';
import { showCourierSuccess , courierLogout } from '../actions/CourierActions.js';
import setAuthorizationToken from '../utils/setAuthorizationToken';
// import history from '../history'
import Axios from 'axios'
import { courierProfileApi } from '../apiConfig';



const mapStateToProps = (state) => {
    return {
        courier: state.CourierHeader.courier
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
        },
        courierLogout: () => {
            localStorage.removeItem('jwtToken');
            setAuthorizationToken(false);
            dispatch(courierLogout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
