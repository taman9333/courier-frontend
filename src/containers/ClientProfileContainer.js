import ClientProfile from '../components/ClientProfile';
import Axios from 'axios';
import {connect} from 'react-redux';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import {showClientSuccess, logoutClient} from '../actions/client';

const mapStateToProps = function(state){
  return{
    client:state.client.client,
    loading:state.client.loading,
    error:state.client.error
  }
}

const mapDispatchToProps = function(dispatch){
  return{
    showClient:function(){
      Axios.get(`http://localhost:3000/clients`).then(function(response){
        dispatch(showClientSuccess(response))
      })
      .catch(function(error){
        console.log(error)
      })
    },


    logoutClient:function(){
      localStorage.removeItem('jwtToken');
      setAuthorizationToken(false)
      dispatch(logoutClient())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ClientProfile)
