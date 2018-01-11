import React, { Component } from 'react';
import history from '../../history';
// import './style-courier-header.css';
import Notifications from '../notifications';
import './style.css'
// import './style.css'
// import { Route } from 'react-router-dom';
// import CourierNotifications from '../containers/CourierNotificationsContainer';

export default class CourierHeader extends Component{

  componentWillMount(){
    if(localStorage.getItem('courierAuth') === "true" && Object.keys(this.props.courier).length === 0){
      this.props.showCourier(this.props.courier.id)
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
      <div className="courier-header" >
        <div className="float-right">
          <Notifications />
          <p className="courier-header-details">Welcome {this.props.courier.username}</p>
          <button className="btn btn-sm btn-primary" onClick={this._logout.bind(this)}>Log out</button>
          {/* <img alt="" src="" className="courier-header-details" /> */}
        </div>
      </div>
    )
  }
}
