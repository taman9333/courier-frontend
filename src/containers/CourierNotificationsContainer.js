import { connect } from 'react-redux';
import Header from '../components/CourierHeader.js';
import { showCourier, courierLogout } from '../actions/CourierActions.js';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import history from '../history'
import Axios from 'axios'



const mapStateToProps = (state) => {
    return {
        courier: state.Profile.courier,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showCourier: (courier) => {
            dispatch(courierLoginLoading());
            // setTimeout(() => {
                dispatch(courierLogin(courier)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(courierLoginSuccess(response.payload.courier));
                        const token = response.payload.data.auth_token;
                        localStorage.setItem('jwtToken', token);
                        dispatch(courierLoginSuccess(response))
                        setAuthorizationToken(token);
                        history.push('/clientprofile')
                    }else{
                        dispatch(courierLoginFailure(response.payload.message));
                    }
                })
            // }, 2000)
        },
        courierLogout: () => {
            localStorage.removeItem('jwtToken');
            setAuthorizationToken(false);
            dispatch(courierLogout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);


  
      // showClient:function(){
      //   Axios.get('http://localhost:3000/client/show').then(function(response){
      //     dispatch(showClientSuccess(response))
      //   })
      //   .catch(function(error){
      //     console.log(error)
      //   })
      // },


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
    showClient:function(id){
      Axios.get(`http://localhost:3000/clients/${id}`).then(function(response){
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

