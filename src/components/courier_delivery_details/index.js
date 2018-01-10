import React, {Component} from 'react';
import Axios from 'axios';

export default class CourierDeliveryDetails extends Component{

  constructor(props){
    super(props);
    this.state = {
      delivery:{},
      order:{},
      pickup:{},
      drop_off:{},
      bid:{},
      client:{},
      status:""
    }
    this._handleStatusChange = this._handleStatusChange.bind(this)
  }

  _handleStatusChange(e){
    e.preventDefault()
    const id = this.props.location.pathname.split("/")[3]
    const value = document.getElementsByTagName("select")[0].value
    Axios.post(`http://localhost:3000/courier/deliveries/${id}/update`, {status:value}).then((response)=>{
      if (response.status < 400) {
        this.setState({...this.state, status:response.data.delivery_status})
      }
    })
  }

  componentWillMount(){
    const id = this.props.location.pathname.split("/")[3]
    Axios.get(`http://localhost:3000/courier/deliveries/${id}`).then((response)=>{
      this.setState({...this.state, ...response.data, status:response.data.delivery.status})
    })
  }

  render(){
    const {delivery, order, pickup, drop_off, bid, client} = this.state
    return(
      <div>
        { this.state.status === "delivered" || this.state.status === ""?
          null
          :<div className="update-delivery-status">
            <form onSubmit={this._handleStatusChange}>
              <select>
                <option></option>
                {this.state.status === "enroute"?null:<option value="enroute">Enroute</option>}
                <option value="delivered">Delivered</option>
              </select>
              <button>Submit</button>
            </form>
          </div>
        }
        <p>Delivery Status: {this.state.status == "waiting_pickup"? "Waiting Pickup":this.state.status}</p>
        <div className="order">
          <p>Category: {order.category}</p>
          <p>Weight in Kg: {order.weight}</p>
          <p>Dimensions in inches: {order.dimensions}</p>
          <p>Delivery Date: {order.delivery_date}</p>
          <p>Billing Address: {order.billing_address == 1? "Pick Up Address": "Drop Off Address"}</p>
        </div>
        <div className="pickup">
          <h4>Pick Up Address</h4>
          <p>Apartment Number: {pickup.apartment_number}</p>
          <p>Building Number: {pickup.building_number}</p>
          <p>Street: {pickup.street}</p>
          <p>Area: {pickup.area}</p>
        </div>
        <div className="drop-off">
          <h4>Drop Off Address</h4>
          <p>Apartment Number: {drop_off.apartment_number}</p>
          <p>Building Number: {drop_off.building_number}</p>
          <p>Street: {drop_off.street}</p>
          <p>Area: {drop_off.area}</p>
        </div>
        <div className="bid">
          <p>My Bid: ${bid.price}</p>
        </div>
        <div className="client">
          <p>Client name: {client.username}</p>
          <p>Contact client</p>
          <p>Phone: {client.phone}</p>
          <p>Email: {client.email}</p>
        </div>

      </div>
    )
  }

}
