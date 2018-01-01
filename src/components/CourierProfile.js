import React, { Component } from 'react';
// import './style.css'
import { Link } from 'react-router-dom';


export default class CourierProfile extends Component{
  componentWillMount(){
    if(localStorage.getItem('jwtToken') !== null && Object.keys(this.props.courier).length === 0){
      this.props.showCourier(this.props.courier.id)
    }
  }
  render(){
    // const courier = this.state.courier
    return(
      <div>
        {/* <img alt="" src="${courier.img}"/> */}
        {/* rating */ }
        <p>
          {this.props.courier.username}
          Email: {this.props.courier.email}
          Phone number: {this.props.courier.phone}
        </p>
        <Link to="/courier/updateprofile">Update Profile</Link>
        <Link to="/courier/resetpassword">Change Password</Link> 
      </div>
    )
  }
}