import React, {Component} from 'react'
import './style.css'

export default class OrderDetails extends Component{
  render(){
    const checkBilling = function(){
      if (order.billing_address == 1) {
        return `Pick Up Address`
      }else if (order.billing_address == 2) {
        return `Drop Off Address`
      }else{
        return null
      }
    }
    const {order, pickup, drop_off} = this.props

    var x = `${new Date(order.delivery_date)}`
    x = x.split(" ").slice(0, 4)
    x = x.join(" ")

    return(
      <div>
        <div className="order-details-margin-left">
          <h4>Order Info</h4>
          <p><span className="key-width">Category</span>{order.category}</p>
          <p><span className="key-width">Weight</span>{order.weight} k.g</p>
          <p><span className="key-width">Dimensions</span>{order.dimensions} inches</p>
          <p><span className="key-width">Delivery date</span>{x}</p>
          <p><span className="key-width">Billing address</span>{checkBilling()}</p>
        </div>
        <hr className="my-4" />
        <div className="order-details-margin-left">
          <h4>Pick Up Address</h4>
          <p><span className="key-width">Area</span>{pickup.area}</p>
          <p><span className="key-width">Street</span>{pickup.street}</p>
          <p><span className="key-width">Building Number</span>{pickup.building_number}</p>
          <p><span className="key-width">Apartment Number</span>{pickup.apartment_number}</p>
        </div>
        <hr className="my-4" />
        <div className="order-details-margin-left">
          <h4>Drop Off Address</h4>
          <p><span className="key-width">Area</span>{drop_off.area}</p>
          <p><span className="key-width">Street</span>{drop_off.street}</p>
          <p><span className="key-width">Building Number</span>{drop_off.building_number}</p>
          <p><span className="key-width">Apartment Number</span>{drop_off.building_number}</p>
        </div>
      </div>
    )
  }
}


// {
//   Object.keys(this.props.flashMessage).length === 0?
//   null
//   :<p className="flash-message-success">{this.props.flashMessage}</p>
// }
