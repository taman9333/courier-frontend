import React, { Component } from 'react';
// import './style.css'
import { Link } from 'react-router-dom';


export default class CourierProfile extends Component{
  render(){
    const courier = this.state.courier
    return(
      <div>
        <img alt="" src=""/>
        {/* rating */}
        <p>
          ${courier.username}
          Email: ${courier.email}
          Phone number: ${courier.phone}
        </p>
        <Link to="/courier/updateprofile">Update Profile</Link>
        <Link to="/courier/resetpassword">Change Password</Link>
      </div>
    )
  }
}