import { connect } from 'react-redux';
import Form from '../components/CourierLoginForm';
import { courierLoginLoading, courierLogin, courierLoginSuccess, courierLoginFailure } from '../actions/CourierLoginActions';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import history from '../history'
// import { courierSessionsApi } from '../apiConfig';
// import Axios from 'axios'



const mapStateToProps = (state) => {
	return {
		courier: state.CourierLogins.courier,
		logging: state.CourierLogins.logging,
		errorAdding: state.CourierLogins.error,
		flashMessage:state.CourierLogins.loginFlashMessage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		courierLogin: (courier) => {
			dispatch(courierLoginLoading());
			dispatch(courierLogin(courier)).then(response => {
				if(response.payload.status < 400){
					const token = response.payload.data.auth_token;
					const id = response.payload.data.courier.id
					localStorage.setItem('jwtToken', token);
					localStorage.setItem('courierId', id)
					localStorage.setItem('courierAuth', true)
					dispatch(courierLoginSuccess(response))
					setAuthorizationToken(token);
					history.push('/courier')
				}else{
					dispatch(courierLoginFailure(response));
				}
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
