import React, {Component} from 'react'
import './style.css'
export default class OrderDetails extends Component{
  render(){
    return(
      <div>
      <h2>OrderDetails Page</h2>
        {
          Object.keys(this.props.flashMessage).length === 0?
          null
          :<p className="flash-message-success">{this.props.flashMessage}</p>
        }
      </div>
    )
  }
}
