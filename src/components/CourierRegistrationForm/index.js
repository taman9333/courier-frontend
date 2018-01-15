import React, { Component } from 'react';
import './style.css'
import history from '../../history';
export default class CourierRegistrationForm extends Component{
  handleSubmit(event) {
    event.preventDefault();
    var newCourier = document.getElementById('newCourier');
    var courier = new FormData(newCourier);
    this.props.addCourier(courier);
  }


  componentWillMount(){
    if (localStorage.getItem('jwtToken') !== null) {
      history.push('/login/courier')
    }
  }

  render(){
    return(
      <div>
      {/* {
        this.props.flashMessage.constructor.name === 'Array'?
          <div id="flash-message-error">
            {
              this.props.flashMessage.map((item, i)=>
                <p key={i} className="flash-message-error"><span>&#10005;</span>{item}</p>
              )
            }
          </div>
        :null


      } */}
        <form name="newCourier" id="newCourier" onSubmit={(e)=> this.handleSubmit(e)}>
        <div className="courier-form">
          <label>Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="courier-form">
          <label>Email</label>
          <input type="email" name="email" id="email"  />
        </div>
        <div className="courier-form">
          <label>image</label>
          <input type="file" name="img" id="img" />
        </div>
        <div className="courier-form">
          <label>phone</label>
          <input type="text" name="phone" id="phone" />
        </div>
        <div className="courier-form">
          <label>password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="courier-form">
          <label>password confirmation</label>
          <input type="password" name="password_confirmation" id="password_confirmation" />
        </div>
        <button>Register</button>
        </form>
      </div>
    )
  }
}
