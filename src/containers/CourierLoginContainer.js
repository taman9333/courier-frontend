import { connect } from 'react-redux';
import Form from '../components/CourierLoginForm.js';
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
					localStorage.setItem('jwtToken', token);
					localStorage.setItem('courierAuth', true)
					dispatch(courierLoginSuccess(response))
					setAuthorizationToken(token);
					history.push('/courier/profile')
				}else{
					dispatch(courierLoginFailure(response));
				}
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
