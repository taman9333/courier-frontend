import {connect} from 'react-redux';
import OrderDetails from '../components/OrderDetails'

const mapStateToProps = function(state){
  return{
    flashMessage:state.order.orderFlashMessage
  }
}

export default connect(mapStateToProps, null)(OrderDetails);
