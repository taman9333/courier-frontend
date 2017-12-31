import React, { Component } from 'react';
// import './style.css'
// import { Route } from 'react-router-dom';
// import CourierNotifications from '../containers/CourierNotificationsContainer';

export default class CourierHeader extends Component{
  render(){
    const courier = this.state.courier;
    return(
      <div>
        <form onSubmit={(e)=>{e.preventDefault(); this.props.courierLogout()}}>
        <img alt="" src=""/>
        <p>Welcome ${courier.username}</p>
        {/* <CourierNotifications /> */}
        <button>Log out</button>
        </form>
      </div>
    )
  }
}