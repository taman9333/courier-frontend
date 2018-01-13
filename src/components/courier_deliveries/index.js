import React, {Component} from 'react'
import Axios from 'axios'
import {getCourierDeliveriesApi} from '../../apiConfig'
import './style.css'
import {Link} from 'react-router-dom';

export default class CourierDeliveries extends Component{

  constructor(props){
    super(props);
    this.state = {
      deliveries:[]
    }
  }

  componentWillMount(){
    Axios.get(getCourierDeliveriesApi).then((response)=>{
      this.setState({...this.state.deliveries, deliveries:response.data})
    })
  }

  render(){
    const {deliveries} = this.state
    return(
      <div>
        {
          deliveries.map((delivery)=>{
            var x = `${new Date(delivery.delivery_date)}`
            x = x.split(" ").slice(0, 4)
            x = x.join(" ")
            return(
              <div key={delivery.id} className="courier-deliveries">
                <p>Category: {delivery.category} </p>
                <p>Delivery Date: {x} </p>
                <Link to={`/courier/deliveries/${delivery.id}`}>More Details</Link>
              </div>
            )

          })
        }
      </div>
    )
  }

}
