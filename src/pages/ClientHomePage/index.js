import React, {Component} from 'react';
import ClientNav from '../../containers/ClientNavContainer';
import requireAuth from '../../utils/requireAuth';
import CreateOrder from '../../containers/CreateOrderContainer';
import ClientDeliveries from '../../components/client_deliveries';
import ClientDeliveriesDetails from '../../components/client_deliveries_details';
import ClientOrders from '../../components/client_orders'

import './style.css'

import {Route, Link} from 'react-router-dom'

export default class ClientHomePage extends Component{

  // _addActiveClass(e){
  //
  //   // var links = document.querySelectorAll('.sidebarLinks');
  //   // Array.prototype.forEach.call(links, function(link){
  //   //   link.classList.remove('active');
  //   // })
  //   // e.target.className += " active"
  // }

  componentDidMount(){
    var links = document.querySelectorAll('.sidebarLinks');
    Array.prototype.forEach.call(links, (link)=>{
      if (link.getAttribute('href') == this.props.location.pathname) {
        link.className += " active"
      }
    })
  }

  render(){
    return(
      <div>
        <ClientNav />
        {
          this.props.location.pathname == "/client"?
          <p>fuck client</p>
          :null
        }
        <div className="vertical-menu">
        <Link className="sidebarLinks" to="/client" onClick={this._addActiveClass} >View Profile</Link>
        <Link className="sidebarLinks" to="/client/createorder" onClick={this._addActiveClass} >Create Order</Link>
        <Link className="sidebarLinks" to="/client/orders">My Orders</Link>
        <Link className="sidebarLinks" to="/client/deliveries">Deliveries</Link>
        </div>

        <Route path='/client/orders' component={ClientOrders} />
        <Route path='/client/deliveries/:id'  component={ClientDeliveriesDetails} />
        <Route path='/client/deliveries' exact component={ClientDeliveries} />
        <Route path='/client/createorder' component={(CreateOrder)}/>
      </div>
    )

  }
}
