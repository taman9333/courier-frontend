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
            <div className="client-profile-container jumbotron">
              <div className="img-container">
                <img alt="" src={client.img.url == null? '../../../default-profile.jpeg' : `${this.props.client.img.url}`}/>
              </div>
              <div >
                <p><span className="key-width">Name</span>{this.props.client.username}</p>
                <p><span className="key-width">Email</span>{this.props.client.email}</p>
                <p><span className="key-width">Phone number</span>{this.props.client.phone}</p>
              </div>
              <div className="links">
               <Link className="btn btn-success" to="/client/updateprofile">Update Profile</Link>
              </div>
          </div>
          )
        } else {
          return null
        }
      }

  }
}

//<img alt="" src={`http://localhost:3000/${this.props.client.img.url}`}/>
