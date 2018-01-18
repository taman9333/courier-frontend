import React, { Component } from 'react';
import './style.css'
import history from '../../history';
import HomePageNav from '../home_page_nav'

export default class CourierRegistrationForm extends Component{
  handleSubmit(event) {
    event.preventDefault();
    var newCourier = document.getElementById('newCourier');
    var courier = new FormData(newCourier);
    this.props.addCourier(courier);
  }


  componentWillMount(){
    if (localStorage.getItem('jwtToken') !== null) {
      history.push('/')
    }
  }

  render(){
    return(
      <div>
        <HomePageNav url={this.props.location.pathname} />
        <form className="jumbotron" name="newCourier" id="newCourier" onSubmit={(e)=> this.handleSubmit(e)}>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Username</label>
          <div className="col-sm-7">
            <input className="form-control" type="text" name="username" id="username" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Email</label>
          <div className="col-sm-7">
            <input className="form-control" type="email" name="email" id="email"  />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">image</label>
          <div className="col-sm-7">
            <input className="form-control-file" type="file" name="img" id="img" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">phone</label>
          <div className="col-sm-7">
            <input className="form-control" type="text" name="phone" id="phone" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">password</label>
          <div className="col-sm-7">
            <input className="form-control" type="password" name="password" id="password" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">password confirmation</label>
          <div className="col-sm-7">
            <input className="form-control" type="password" name="password_confirmation" id="password_confirmation" />
          </div>
        </div>
        <button className="btn btn-success">Register</button>
        </form>
      </div>
    )
  }
}
