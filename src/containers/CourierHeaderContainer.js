import { connect } from 'react-redux';
import Header from '../components/CourierHeader.js';
import { showCourier, courierLogout } from '../actions/CourierActions.js';
import setAuthorizationToken from '../utils/setAuthorizationToken';
// import history from '../history'
import Axios from 'axios'
import { courierApi } from '../apiConfig';



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
                dispatch(showCourier(response))
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
