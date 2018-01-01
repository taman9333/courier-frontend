import {connect} from 'react-redux';
import CreateOrder from '../components/CreateOrder';
import {createOrderLoading, createOrder, createOrderSuccess, createOrderFailure} from '../actions/order'
import history  from '../history'

const mapStateToProps = function(state){
  return{
    flashMessage:state.order.orderFlashMessage,
    loading:state.order.loading
  }
}

const mapDispatchToProps = function(dispatch){
  return{
    createOrder:function(id, client){
      dispatch(createOrderLoading());
      dispatch(createOrder(id, client)).then(function(response){
        if(response.payload.status < 400){
          history.push('/orderdetails')
          dispatch(createOrderSuccess(response))
        }else{
          dispatch(createOrderFailure(response))
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder)
