import React, { Component } from 'react';
import history from '../../history';
import './style-courier-header.css'
import {Link} from 'react-router-dom'
import CourierNotifications from '../courier_notifications'
import {connect} from 'react-redux'

// import './style.css'
// import { Route } from 'react-router-dom';
// import CourierNotifications from '../containers/CourierNotificationsContainer';

class CourierHeader extends Component{

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
    if (Object.keys(this.props.courier).length > 0) {
    return(
      <div className="courier-header">
        <div className="float-right">
          <CourierNotifications />
          <p>
            <Link to="/courier">
              <img alt="" className="rounded-circle nav-img" src={this.props.courier.img.url == null?`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcAjO1-yy10xV5ylPfYoPrnpgC8w5TlaUmF9B_BTol5VGia5rp` :`http://localhost:3000/${this.props.courier.img.url}`}/>{this.props.courier.username}
            </Link>
          </p>
          <button className="btn btn-sm btn-primary" onClick={this._logout.bind(this)}>Logout</button>
        </div>
        <br/>
      </div>
    )
    }else{
      return(<div>Loading</div>)
    }
  }
}


const mapStateToProps = (state) => {
    return {
        courier: state.Courier.courier
    }
}

export default connect(mapStateToProps)(CourierHeader);

// <img alt="" src="" className="courier-header-details" />
// <p className="courier-header-details">Welcome {this.props.courier.username}</p>
// {/* <CourierNotifications /> */}
// <button className="courier-header-details" onClick={this._logout.bind(this)}>Log out</button>
