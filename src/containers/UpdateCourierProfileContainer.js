// import { connect } from 'react-redux';
// import Profile from '../components/CourierProfile.js';
// import { updateCourier } from '../actions/CourierActions.js';
// import setAuthorizationToken from '../utils/setAuthorizationToken';
// import { courierApi } from '../apiConfig';
// // import history from '../history'
// import Axios from 'axios'



// const mapStateToProps = (state) => {
// 	return {
// 		courier: state.courier
// 	}
// }



// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		updateCourier: (id) => {
// 			Axios.patch(courierApi).then(response => {
// 				dispatch(updateCourier(response.courier))
// 			})
// 			.catch(error => {
// 			console.log(error)
// 			})
// 		}
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);
