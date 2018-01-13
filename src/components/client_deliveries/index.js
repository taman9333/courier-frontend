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
      <div className="client-deliveries-container jumbotron">
        <h1>Deliveries</h1>
        {
          deliveries.map((delivery)=>{
            var x = `${new Date(delivery.delivery_date)}`
            x = x.split(" ").slice(0, 4)
            x = x.join(" ")
            return(
              <div key={delivery.id} className="client-deliveries">
                <p><span className="delivery-key-width">Category</span>{delivery.category} </p>
                <p><span className="delivery-key-width">Delivery Date</span>{x}</p>
                <p><span className="delivery-key-width">Courier</span>{delivery.courier}</p>
                <p><span className="delivery-key-width">Price</span>${delivery.price}</p>
                <Link to={`/client/deliveries/${delivery.id}`}>More Details...</Link>
              </div>
            )

          })
        }
      </div>
    )
  }

}
