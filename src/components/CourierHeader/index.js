import React, { Component } from 'react';
import history from '../../history';
import './style-courier-header.css'
import {Link} from 'react-router-dom'
import CourierNotifications from '../courier_notifications'


// import './style.css'
// import { Route } from 'react-router-dom';
// import CourierNotifications from '../containers/CourierNotificationsContainer';

export default class CourierHeader extends Component{

  componentWillMount(){
    if(localStorage.getItem('courierAuth') === "true" && Object.keys(this.props.courier).length === 0){
      this.props.showCourier()
    }
  }

  _logout(e){
    e.preventDefault();
    this.props.courierLogout();
    history.push('/login/courier')
  }

  render(){
    // const courier = this.state;
    return(

      <div className="courier-header">
        <div className="float-right">
          <CourierNotifications />
          <p><Link to="/courier">{this.props.courier.username}</Link></p>
          {/* <p><Link to="/">home</Link></p> */}
          <button className="btn btn-sm btn-primary" onClick={this._logout.bind(this)}>Logout</button>
        </div>
        <br/>
      </div>
    )
  }
}

// <img alt="" src="" className="courier-header-details" />
// <p className="courier-header-details">Welcome {this.props.courier.username}</p>
// {/* <CourierNotifications /> */}
// <button className="courier-header-details" onClick={this._logout.bind(this)}>Log out</button>
