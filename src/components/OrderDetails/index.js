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
    return(
      <div>
        <p>Category: {order.category}</p>
        <p>Weight: {order.weight} k.g</p>
        <p>Dimensions: {order.dimensions}</p>
        <p>Delivery date: {order.delivery_date}</p>
        <p>Billing address: {checkBilling()}</p>
        <div>
          <h4>Pick Up Address</h4>
          <p>Area: {pickup.area}</p>
          <p>Street: {pickup.street}</p>
          <p>Building: Number {pickup.building_number}</p>
          <p>Apartment: Number {pickup.apartment_number}</p>
        </div>
        <div>
          <h4>Drop Off Address</h4>
          <p>Area: {drop_off.area}</p>
          <p>Street: {drop_off.street}</p>
          <p>Building: Number {drop_off.building_number}</p>
          <p>Apartment: Number {drop_off.building_number}</p>
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
