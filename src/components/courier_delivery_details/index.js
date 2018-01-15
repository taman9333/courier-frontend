import React, {Component} from 'react';
import Axios from 'axios';
import './style.css'
import {courierDeliveries} from '../../apiConfig';

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
      bid_deadline:"",
      status:""
    }
    this._handleStatusChange = this._handleStatusChange.bind(this)
  }

  _handleStatusChange(e){
    e.preventDefault()
    const id = this.props.location.pathname.split("/")[3]
    const value = document.getElementsByTagName("select")[0].value
    Axios.post(`${courierDeliveries}/${id}/update`, {status:value}).then((response)=>{
      if (response.status < 400) {
        this.setState({...this.state, status:response.data.delivery_status})
      }
    })
  }

  componentWillMount(){
    const id = this.props.location.pathname.split("/")[3]
    Axios.get(`${courierDeliveries}/${id}`).then((response)=>{
      this.setState({...this.state, ...response.data, status:response.data.delivery.status})
    })
  }

  render(){
    const {delivery, order, pickup, drop_off, bid, client, bid_deadline} = this.state

    function dateFormat(x){
			var date = `${new Date(x)}`
        date = date.split(" ").slice(0, 4)
        date = date.join(" ")
			return date
    }

    return(
      <div className="courier-delivery-details-container jumbotron">
        <h1>Delivery Details</h1>
        { this.state.status === "delivered" || this.state.status === ""?
          null
          :<div className="update-delivery-status">
            <form onSubmit={this._handleStatusChange} className="form-inline">
              <div className="form-group mb-2">
                <label htmlFor="delivery-status">Change Delivery Status</label>
                <select className="form-control" id="delivery-status">
                  <option></option>
                  {this.state.status === "enroute"?null:<option value="enroute">Enroute</option>}
                  <option value="delivered">Delivered</option>
                </select>
              </div>
              <button className="btn-sm btn-success">Submit</button>
            </form>
          </div>
        }
        <div className="view-status"><p><span>Delivery Status</span>{this.state.status == "waiting_pickup"? "Waiting Pickup":this.state.status}</p></div>
        <hr className="my-4" />
        <div className="order">
          <h4>Order Details</h4>
          <p><span className="key-width">Category</span>{order.category}</p>
          <p><span className="key-width">Weight</span>{order.weight} k.g</p>
          <p><span className="key-width">Dimensions</span>{order.dimensions} inches</p>
          <p><span className="key-width">Delivery date</span>{dateFormat(order.delivery_date)}</p>
          <p><span className="key-width">Billing address</span>{order.billing_address == 1? "Pick Up Address": "Drop Off Address"}</p>
        </div>
        <hr className="my-4" />
        <div className="pickup">
          <h4>Pick Up Address</h4>
          <p><span className="key-width">Area</span>{pickup.area}</p>
          <p><span className="key-width">Street</span>{pickup.street}</p>
          <p><span className="key-width">Building Number</span>{pickup.building_number}</p>
          <p><span className="key-width">Apartment Number</span>{pickup.apartment_number}</p>
        </div>
        <hr className="my-4" />
        <div className="drop-off">
          <h4>Drop Off Address</h4>
          <p><span className="key-width">Area</span>{drop_off.area}</p>
          <p><span className="key-width">Street</span>{drop_off.street}</p>
          <p><span className="key-width">Building Number</span>{drop_off.building_number}</p>
          <p><span className="key-width">Apartment Number</span>{drop_off.apartment_number}</p>
        </div>
        <hr className="my-4" />
        <div className="client">
          <h4>Client Info</h4>
          <p><span className="key-width">Client name</span>{client.username}</p>
          <p><span className="key-width">Phone</span>{client.phone}</p>
          <p><span className="key-width">Email</span>{client.email}</p>
        </div>
        <hr className="my-4" />
        <div className="bid">
          <h4>Bid Details</h4>
          <p><span className="key-width">Your Bid</span>${bid.price}</p>
          <p><span className="key-width">Bid Deadline</span>{dateFormat(bid_deadline)}</p>
        </div>

      </div>
    )
  }

}
