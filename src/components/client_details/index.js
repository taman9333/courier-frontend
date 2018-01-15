import React, { Component } from 'react';
import './style.css'
// import history from '../../history';
import { Link } from 'react-router-dom';


export default class ClientDetails extends Component{
  // componentWillMount(){
  //   if(localStorage.getItem('jwtToken') !== null && Object.keys(this.props.client).length === 0){
  //     this.props.showClient()
  //   }
  // }
  render(){
    const {client} = this.props;
      {
        if (Object.keys(client).length > 0) {
          return (
            <div>
              <div className="float-left">
              <img alt="" src={this.props.client.img.url}/>
              </div>
              <div>
                <p>Name: {this.props.client.username}</p>
                <p>Email: {this.props.client.email}</p>
                <p>Phone number: {this.props.client.phone}</p>
                {/* <Link className="link" to="/client/updateprofile">Update Profile</Link>
                <Link className="link" to="/client/resetpassword">Reset Password</Link>  */}
              </div>
            </div>
          )
        } else {
          return <div>Loading</div>
        }
      }

  }
}

//<img alt="" src={`http://localhost:3000/${this.props.client.img.url}`}/>
