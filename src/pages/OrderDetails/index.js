import React, {Component} from 'react'
import OrderDetails from '../../components/OrderDetails'
import {connect} from 'react-redux'
import './style.css'
import Axios from 'axios'
import history from '../../history'
import ClientNav from '../../containers/ClientNavContainer'
import {rootApi} from '../../apiConfig'

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
    Axios.get(`${rootApi}/clients/orders/${id}`).then((response)=>{
        this.setState({...this.state, order:response.data.order, pickup:response.data.pickup_address, drop_off:response.data.drop_off_address, auction:response.data.auction, last_bid:response.data.last_bid, winning_courier:response.data.winning_courier, warning:response.data.warning})
    })
    .catch(function(error){
      history.push('/')
    })
  }

  _acceptBid(){
    const bid = {"client":{bid_id:this.state.last_bid.id, order_id:this.state.order.id}}
    Axios.post(`${rootApi}/clients/deliveries`, bid).then((response)=> {
      this.setState({...this.state, auction:{...this.state.auction, status:response.data.orderStatus}})
    })
  }

  _rejectBid(){
    Axios.post(`${rootApi}/bid/reject`, {bid_id:this.state.last_bid.id}).then((response)=>{
      this.setState({...this.state, last_bid:response.data.bid, warning:response.data.warning, winning_courier:response.data.winning_courier, auction:{...this.state.auction, status:response.data.auction_status}})
    })
  }

  render(){
    const {order, pickup, drop_off, auction, last_bid, winning_courier, warning} = this.state
    var x = `${new Date(auction.bid_deadline)}`
    x = x.split(" ").slice(0, 4)
    x = x.join(" ")
    return(
      <div className="jumbotron order-details-container">
        <h1 className="display-5">Order Details</h1>
      {
        Object.keys(this.props.flashMessage).length === 0?
        null
        :<p className="flash-message-success">{this.props.flashMessage}</p>
      }
        <OrderDetails order = {order} pickup={pickup} drop_off={drop_off}/>
        <hr className="my-4" />
        <div id="auction-details">
          <h4>Auction Details</h4>
          <p><span className="key-width">Status</span>{auction.status}</p>
          <p><span className="key-width">Bid Deadline</span>{x}</p>
          <p><span className="key-width">Winning Courier</span>{winning_courier == null? `ــــــــــــــ` :winning_courier }</p>
          <p><span className="key-width">Price</span>${last_bid == null? `ــــــــــــ` :last_bid.price}</p>
          {
            warning != null && auction.status != "closed" && auction.status != "open" ?
            <p className="flash-message-failure">This is the last bid offered, your order will be outdated if you reject this bid</p>
            :null
          }
        </div>
        {auction.status == "pending_acceptance" ?
          <div className="accept-reject">
            <button className="btn-sm btn-success" onClick={this._acceptBid}>Accept this courier</button>
            <button className="btn-sm btn-danger" onClick={this._rejectBid}>Reject, see next bid</button>
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
