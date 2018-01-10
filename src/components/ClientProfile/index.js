import React, {Component} from 'react';
import history from '../../history';
import {Link, Route} from 'react-router-dom';


export default class ClientProfile extends Component{

  componentWillMount(){
    if(localStorage.getItem('jwtToken') !== null && Object.keys(this.props.client).length === 0){
      this.props.showClient()
    }
  }

  _logout(e){
    e.preventDefault();
    this.props.logoutClient();
    history.push('/')
  }

  render(){
    return(
      <div>
        <h1>Welcome {this.props.client.username}</h1>
        <p>Email: {this.props.client.email}</p>
        <p>Phone: {this.props.client.phone}</p>
        <button onClick={this._logout.bind(this)}>Logout</button>
        <Link to={{pathname:`/client/createorder`, query:this.props.client}}>Create Order</Link>
      </div>
    )
  }
}