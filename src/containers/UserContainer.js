import {connect} from 'react-redux'
import UserRegister from '../components/UserRegister'
import {createClientLoading, createClient, createClientSuccess, createClientFailure} from '../actions/user'

const mapStateToProps = function(state){
  return{
    client:state.user.client,
    loading:state.user.loading,
    error:state.user.error
  }
}

const mapDispatchToProps = function(dispatch){
  return{
    createClient:function(client){
      dispatch(createClientLoading());
      dispatch(createClient(client)).then(function(response){
        dispatch(createClientSuccess(response))
      })
      .catch(function(error){
        dispatch(createClientFailure(error))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegister)
