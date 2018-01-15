import React, {Component} from 'react';
import history from '../../history';
import {Link, Route} from 'react-router-dom';
import './style.css'
import Notifications from '../notifications'

export default class ClientNav extends Component{

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
      <div className="client-header">
        <div className="float-right">
          <Notifications />
          <p><Link to="/client/profile">{this.props.client.username}</Link></p>
          <p><Link to="/">home</Link></p>
          <button className="btn btn-sm btn-primary" onClick={this._logout.bind(this)}>Logout</button>
        </div>
      <br/>
      </div>
    )
  }
}

// <Link to={{pathname:`/client/createorder`, query:this.props.client}}>Create Order</Link>
