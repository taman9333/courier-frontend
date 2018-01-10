import React, {Component} from 'react'
import Axios from 'axios'
import {getClientDeliveriesApi} from '../../apiConfig'
import {Link} from 'react-router-dom'
import './style.css'

export default class ClientDeliveries extends Component {

  constructor(props){
    super(props);
    this.state = {
      deliveries:[]
    }
  }

  componentWillMount(){
    Axios.get(getClientDeliveriesApi).then((response)=>{
      this.setState({...this.state.deliveries, deliveries:response.data})
    })
  }

  render(){
    const {deliveries} = this.state
    return(
      <div>
        {
          deliveries.map((delivery)=>{
            var x = Date(delivery.delivery_date)
            x = x.split(" ").slice(0, 4)
            x = x.join(" ")
            return(
              <div key={delivery.id} className="client-deliveries">
                <p>Category: {delivery.category} </p>
                <p>Delivery Date: {x} </p>
                <p>Courier: {delivery.courier}</p>
                <p>Price: ${delivery.price}</p>
                <Link to={`/client/deliveries/${delivery.id}`}>More Details</Link>
              </div>
            )

          })
        }
      </div>
    )
  }

}
