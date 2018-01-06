import {connect} from 'react-redux';
import CreateOrder from '../components/CreateOrder';
import {createOrderLoading, createOrder, createOrderSuccess, createOrderFailure} from '../actions/order'
import history  from '../history'

const mapStateToProps = function(state){
  return{
    // flashMessage:state.order.orderFlashMessage,
    flashMessage:state.flashMessage.flashMessage,
    loading:state.flashMessage.loading
  }
}

const mapDispatchToProps = function(dispatch){
  return{
    createOrder:function(client){
      dispatch(createOrderLoading());
      dispatch(createOrder(client)).then(function(response){
        if(response.payload.status < 400){
          dispatch(createOrderSuccess(response))
          history.push({
            pathname: `/orderdetails/${response.payload.data.order_id}`,
            id:response.payload.data.order_id
          })
        }else{
          dispatch(createOrderFailure(response))
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder)
