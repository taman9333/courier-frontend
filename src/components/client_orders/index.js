import React, {Component} from 'react';
import './style.css';
import Axios from 'axios';
import {Link} from 'react-router-dom'
import {createOrderApi} from '../../apiConfig'

export default class ClientOrders extends Component{

  constructor(){
    super();
    this.state={
      orders:[]
    }
  }

  componentWillMount(){
    Axios.get(createOrderApi).then((response)=>{
      this.setState({...this.state, orders:response.data})
    })
  }

  render(){
    const {orders} = this.state
    return(
      <div className="client-orders-container jumbotron">
        <h1>Orders</h1>
        {
          orders.map((order)=>{
            var x = `${new Date(order.delivery_date)}`
            x = x.split(" ").slice(0, 4)
            x = x.join(" ")
            return(
              <div key={order.id} className="client-orders">
                <p><span className="order-key-width">Category</span>{order.category} </p>
                <p><span className="order-key-width">Delivery Date</span>{x}</p>
                <Link to={`/client/orderdetails/${order.id}`}>More Details...</Link>
              </div>
            )

          })
        }
      </div>
    )
  }

}
