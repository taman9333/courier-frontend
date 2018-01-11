import React, { Component } from 'react';
import history from '../../history';
import './style-courier-header.css'
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
      <div >

        <img alt="" src="" className="courier-header-details" />
        <p className="courier-header-details">Welcome {this.props.courier.username}</p>
        {/* <CourierNotifications /> */}
        <button className="courier-header-details" onClick={this._logout.bind(this)}>Log out</button>

      </div>
    )
  }
}
