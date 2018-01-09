import React, { Component } from 'react';
// import './style.css'
import Axios from 'axios';
import {resetCourierPasswordApi} from '../../apiConfig';
import history from '../../history'
import setAuthorizationToken from '../../utils/setAuthorizationToken';


export default class ResetPassword extends Component{
  constructor(){
		super()
		this.state = {
			// courier:{},
			password:'',
			new_password:'',
			new_password_confirmation:''
		}
        this._handleChange = this._handleChange.bind(this),
        this._resetPassword = this._resetPassword.bind(this)
  }

    _handleChange(e){
    this.setState({...this.state, [e.target.name]:e.target.value})
    }

    _resetPassword(e){
        e.preventDefault();
        Axios.patch(resetCourierPasswordApi, this.state);
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        history.push('/login/courier')
    }

  render(){
	return(
		<div>
		<form onSubmit={this._resetPassword}>
		<div className="reset-password">
		  <label>Current Password</label>
		  <input type="password" name="password" />
			<label>New Password</label>
		  <input type="password" name="new_password" />
			<label>New Password Confirmation</label>
		  <input type="password" name="new_password_confirmation" />
		</div>
		<button>Reset Password</button>
		</form>
	  </div>
	)
  }
}