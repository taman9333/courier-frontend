import {connect} from 'react-redux'
import UserRegister from '../components/UserRegister'
import {createClientLoading, createClient, createClientSuccess, createClientFailure} from '../actions/client'
import history from '../history'

const mapStateToProps = function(state){
  return{
    client:state.client.client,
    loading:state.client.loading,
    error:state.client.error,
    flashMessage:state.client.registerFlashMessage
  }
}

const mapDispatchToProps = function(dispatch){
  return{
    createClient:function(client){
      dispatch(createClientLoading());
      dispatch(createClient(client)).then(function(response){
        if(response.payload.status <400){
          history.push('/')
          dispatch(createClientSuccess(response))
        }else{
          dispatch(createClientFailure(response))
        }
      })
      // .catch(function(error){
      //   dispatch(createClientFailure(error))
      // })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegister)
