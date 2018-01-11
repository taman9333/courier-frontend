import React, { Component } from 'react';
import './style.css'
// import history from '../../history';
import { Link } from 'react-router-dom';


export default class CourierProfile extends Component{
  // componentWillMount(){
  //   if(localStorage.getItem('jwtToken') !== null && Object.keys(this.props.courier).length === 0){
  //     this.props.showCourier()
  //   }
  // }
  render(){
    const {courier} = this.props;
      {
        if (Object.keys(courier).length > 0) {
          return (
            <div>
              <div className="float-left">
                <img alt="" src={`http://localhost:3000/${this.props.courier.img.url}`}/>
              </div>
              <div>
                <p>Name: {this.props.courier.username}</p>
                <p>Email: {this.props.courier.email}</p>
                <p>Phone number: {this.props.courier.phone}</p>
                <Link className="link" to="/courier/updateprofile">Update Profile</Link>
                <Link className="link" to="/courier/resetpassword">Reset Password</Link> 
              </div>
            </div>
          )
        } else {
          return <div>Loading</div>
        }
      }

  }
}