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
            <div className="courier-profile-container jumbotron">
              <div className="img-container">
                <img alt="" src={courier.img.url == null? '../../../default-img.jpeg' :`${this.props.courier.img.url}`}/>
              </div>
              <div>
                <p><span className="key-width">Name</span>{this.props.courier.username}</p>
                <p><span className="key-width">Email</span>{this.props.courier.email}</p>
                <p><span className="key-width">Phone number</span>{this.props.courier.phone}</p>
              </div>
              <div className="links">
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

//<img alt="" src={this.props.courier.img.url}/>
