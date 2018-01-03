import React, { Component } from 'react';
// import './style.css'

export default class ResetPassword extends Component{
  // constructor(){
	// 	super()
	// 	this.state = {
	// 		courier:{},
	// 		old_password:'',
	// 		new_password:'',
	// 		new_password_confirmation:''
	// 	}
	// 	this._handleChange = this._handleChange.bind(this)
  // }

  // _handleChange(e){
	// this.setState({...this.state, [e.target.name]:e.target.value})
  // }

  render(){
	return(
		<div>
		<form onSubmit={(e)=>{e.preventDefault() ;resetPassword(data)}}>
		<div className="reset-password">
		  <label>Old Password</label>
		  <input type="password" name="password" />
			<label>Old Password</label>
		  <input type="password" name="new_password" />
			<label>Old Password</label>
		  <input type="password" name="new_password_confirmation" />
		</div>
		<button>Reset Password</button>
		</form>
	  </div>
	  // <div>
		// <form onSubmit={(e)=>{e.preventDefault() ;this.props.resetPassword(data)}}>
		// <div className="reset-password">
		//   <label>Old Password</label>
		//   <input type="password" name="password" onChange={this._handleChange} />
		// 	<label>Old Password</label>
		//   <input type="password" name="new_password" onChange={this._handleChange} />
		// 	<label>Old Password</label>
		//   <input type="password" name="new_password_confirmation" onChange={this._handleChange} />
		// </div>
		// <button>Reset Password</button>
		// </form>
	  // </div>
	)
  }
}