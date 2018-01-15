import React, {Component} from 'react';
import './style.css'
import OrderDetails from '../../components/OrderDetails'
import Axios from 'axios'

import history from '../../history'

export default class OrderDetailsPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      order:{},
      pickup:{},
      drop_off:{},
      auction:{},
      last_bid:{}
    },
    this._handleChange = this._handleChange.bind(this),
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleChange(e){
    this.setState({...this.state, [e.target.name]:e.target.value})
  }

  _handleSubmit(e){
    e.preventDefault();
    let bid = {}
    bid["bid"] = {price:this.state.price, auction_id:this.state.auction.id}
    Axios.post('http://localhost:3000/bid/create', bid).then((response)=>{
      this.setState({...this.state, last_bid:response.data.bid})
    })
    document.getElementsByTagName("input")[0].value = ""

  }

  componentWillMount(){
    const id = Number(this.props.location.pathname.split("/")[3])
    Axios.get(`http://localhost:3000/clients/orders/${id}`).then((response)=>{
      this.setState({...this.state, order:response.data.order, pickup:response.data.pickup_address, drop_off:response.data.drop_off_address, auction:response.data.auction, last_bid:response.data.last_bid})
    })
    .catch((error)=>{
      history.push('/courier')
    })

  }
//this.state.last_bid != null && Object.keys(this.state.last_bid) != 0
  render(){

    if (this.state.last_bid != null) {
      if (Object.keys(this.state.last_bid).length != 0) {
        if(localStorage.getItem('courierId') != this.state.last_bid.courier_id) {document.getElementsByTagName("input")[0].setAttribute("max", `${this.state.last_bid.price - 1}`)};
      }
    }

    const makeForm = ()=>{
      return(
        <form className="form-inline make-bid" onSubmit={this._handleSubmit}>
          <div className="form-group mb-2">
            <label>Make a lower Bid?</label>
            <input className="form-control" name="price"  min="0" type="number" step="any" onChange={this._handleChange}/>
          </div>
          <button className="btn-sm btn-success">Submit</button>
        </form>
      )
    }

    const {order, pickup, drop_off, auction, last_bid, winning_courier} = this.state

    var x = `${new Date(order.delivery_date)}`
    x = x.split(" ").slice(0, 4)
    x = x.join(" ")
    return(
      <div className="auction-details-container jumbotron">
        <h1>Auction Details</h1>
        <OrderDetails order = {order} pickup={pickup} drop_off={drop_off}/>
        <hr className="my-4" />
        <div id="auction-details">
          <h4>Auction Info</h4>
          <p><span className="key-width">Bid Deadline</span>{x}</p>
          <p><span className="key-width">Last Bid Price</span> $ {last_bid == null? 0 :last_bid.price}</p>
          {
            this.state.last_bid == null?
              makeForm()
            :localStorage.getItem('courierId') != this.state.last_bid.courier_id?
              makeForm()
              :null
          }

        </div>

      </div>
    )
  }
}


// this.state.last_bid == null?

// <p>Winning Courier: {winning_courier == null? `ــــــــ` :winning_courier }</p>
// <p>Status: {auction.status}</p>
