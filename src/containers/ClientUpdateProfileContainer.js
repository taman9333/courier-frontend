import { connect } from 'react-redux';
import UpdateForm from '../components/UpdateClientProfileForm';
import { updateClientLoading, updateClient, updateClientSuccess, updateClientFailure } from '../actions/client.js';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import history from '../history'
import Axios from 'axios'
// import { updateClientProfileApi } from '../apiConfig';


const mapStateToProps = (state) => {
    return {
        client: state.client.client,
        updating: state.client.updating,
        errorUpdating: state.client.updating,
        updateFlashMessage:state.client.updateFlashMessage
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        updateClient: (client) => {
            dispatch(updateClientLoading());
            dispatch(updateClient(client)).then(response => { 
                if(response.payload.status < 400){
                    const client = response.payload.data.client;
                    dispatch(updateClientSuccess(client));
                    history.push('/client')
                }else{
                    dispatch(updateClientFailure(response));
                }
            })
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);

