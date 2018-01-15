import ClientNav from '../components/ClientNav';
import Axios from 'axios';
import {connect} from 'react-redux';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import {showClientSuccess, logoutClient} from '../actions/client';
import {rootApi} from '../apiConfig'

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
      Axios.get(`${rootApi}/clients`).then(function(response){
        dispatch(showClientSuccess(response))
      })
      .catch(function(error){
        console.log(error)
      })
    },


    logoutClient:function(){
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('clientAuth');
      setAuthorizationToken(false)
      dispatch(logoutClient())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ClientNav)
