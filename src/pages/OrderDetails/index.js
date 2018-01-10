import React, {Component} from 'react'
import OrderDetails from '../../components/OrderDetails'
import {connect} from 'react-redux'
import './style.css'
import Axios from 'axios'
import history from '../../history'

class OrderDetailsPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      order:{},
      pickup:{},
      drop_off:{},
      auction:{},
      last_bid:{},
      warning:{},
      winning_courier:""
    },
    this._acceptBid = this._acceptBid.bind(this)
    this._rejectBid = this._rejectBid.bind(this)
  }

  componentWillMount(){
    const id = Number(this.props.location.pathname.split("/")[3])
    Axios.get(`http://localhost:3000/clients/orders/${id}`).then((response)=>{
        this.setState({...this.state, order:response.data.order, pickup:response.data.pickup_address, drop_off:response.data.drop_off_address, auction:response.data.auction, last_bid:response.data.last_bid, winning_courier:response.data.winning_courier, warning:response.data.warning})
    })
    .catch(function(error){
      history.push('/')
    })
  }

  _acceptBid(){
    const bid = {"client":{bid_id:this.state.last_bid.id, order_id:this.state.order.id}}
    Axios.post('http://localhost:3000/clients/deliveries', bid).then((response)=> {
      this.setState({...this.state, auction:{...this.state.auction, status:response.data.orderStatus}})
    })
  }

  _rejectBid(){
    Axios.post('http://localhost:3000/bid/reject', {bid_id:this.state.last_bid.id}).then((response)=>{
      this.setState({...this.state, last_bid:response.data.bid, warning:response.data.warning, winning_courier:response.data.winning_courier, auction:{...this.state.auction, status:response.data.auction_status}})
    })
  }

  render(){

    const {order, pickup, drop_off, auction, last_bid, winning_courier, warning} = this.state
    return(
      <div>
      {
        Object.keys(this.props.flashMessage).length === 0?
        null
        :<p className="flash-message-success">{this.props.flashMessage}</p>
      }
        <h1>Order details page</h1>
        <OrderDetails order = {order} pickup={pickup} drop_off={drop_off}/>
        <div id="order-details">
          <p>Status: {auction.status}</p>
          <p>Bid Deadline: {auction.bid_deadline}</p>
          {
            warning != null?
            <p style={{color:"red"}}>This is the last bid offered, your order will be outdated if you reject this bid</p>
            :null
          }
          <p>Winning Courier: {winning_courier == null? `ــــــــ` :winning_courier }</p>
          <p>Price: $ {last_bid == null? `ــــــــ` :last_bid.price}</p>
        </div>
        {auction.status == "pending_acceptance" ?
          <div>
            <button onClick={this._acceptBid}>Accept this courier</button>
            <button onClick={this._rejectBid}>reject this courier</button>
          </div>
          :null
        }
      </div>
    )
  }
}


const mapStateToProps = function(state){
  return{
    flashMessage:state.flashMessage.flashMessage
  }
}


export default connect(mapStateToProps)(OrderDetailsPage);
