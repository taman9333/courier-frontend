import {connect} from 'react-redux';
import UserLogin from '../components/UserLogin'
import {loginClientLoading, loginClient, loginClientSuccess, loginClientFailure} from '../actions/client'
import setAuthorizationToken from '../utils/setAuthorizationToken';
import history from '../history'
// import ClientProfile from '../components/ClientProfile'
import Axios from 'axios'

const mapStateToProps = function(state){
  return{
    loading:state.client.loading,
    error:state.client.error,
    // flashMessage:state.client.loginFlashMessage
    flashMessage:state.flashMessage.flashMessage
  }
}

const mapDispatchToProps = function(dispatch){
  return{
    loginClient:function(client){
      dispatch(loginClientLoading());
      dispatch(loginClient(client)).then(function(response){
        if (response.payload.status < 400) {
          const token = response.payload.data.auth_token;
          localStorage.setItem('jwtToken', token);
          localStorage.setItem('clientAuth', true)
          dispatch(loginClientSuccess(response))
          setAuthorizationToken(token);
          history.push('/client/profile')
        }else{
          dispatch(loginClientFailure(response))
        }
      })
      // .catch(function(error){
      //   dispatch(loginClientFailure(error))
      // })
    }


    // showClient:function(){
    //   Axios.get('http://localhost:3000/client/show').then(function(response){
    //     dispatch(showClientSuccess(response))
    //   })
    //   .catch(function(error){
    //     console.log(error)
    //   })
    // },
    //
    //
    // logoutClient:function(){
    //   localStorage.removeItem('jwtToken');
    //   setAuthorizationToken(false)
    //   dispatch(logoutClient())
    // }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin)
// export const ClientProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ClientProfile)
