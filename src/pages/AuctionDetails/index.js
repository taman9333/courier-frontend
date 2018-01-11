import React, {Component} from 'react';
import './style.css'
import OrderDetails from '../../components/OrderDetails'
import Axios from 'axios'
import CourierHeader from '../../containers/CourierHeaderContainer'
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
      history.push('/courier/profile')
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
        <form onSubmit={this._handleSubmit}>
          <label>Make a lower Bid</label>
          <input name="price"  min="0" type="number" step="any" onChange={this._handleChange}/>
          <button >Submit</button>
        </form>
      )
    }

    const {order, pickup, drop_off, auction, last_bid, winning_courier} = this.state
    return(
      <div>
        <CourierHeader />
        <h1>Order details page</h1>
        <OrderDetails order = {order} pickup={pickup} drop_off={drop_off}/>
        <div id="auction-details">
          <p>Bid Deadline: {auction.bid_deadline}</p>
          <p>Last Bid Price: $ {last_bid == null? 0 :last_bid.price}</p>
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
