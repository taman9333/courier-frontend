import { connect } from 'react-redux';
import Profile from '../components/client_details';
// import { showClientSuccess } from '../actions/ClientActions.js';
// import setAuthorizationToken from '../utils/setAuthorizationToken';
// import { clientProfileApi } from '../apiConfig';
// import history from '../history'
// import Axios from 'axios'



const mapStateToProps = (state) => {
    return {
        client: state.client.client,
        loading:state.client.loading,
		error:state.client.error
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         showClient: (id) => {
//             Axios.get(clientProfileApi).then(response => {
//                 dispatch(showClientSuccess(response))
//             })
//             .catch(error => {
//             	console.log(error)
//             })
//         }
//     }
// }

export default connect(mapStateToProps)(Profile);
