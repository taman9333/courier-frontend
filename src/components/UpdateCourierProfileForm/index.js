import React, { Component } from 'react';
import {updateCourierProfileApi} from '../../apiConfig';
import Axios from 'axios';
import history from '../../history'
// import './style.css'

export default class UpdateCourierProfile extends Component{
	constructor(){
		super()
		this.state = {
			// username:'',
			// email:'',
			// phone:'',
			// img:''
		}
        this._handleChange = this._handleChange.bind(this),
        this._updateCourier = this._updateCourier.bind(this)
	}
	
	_handleChange(e){
		this.setState({...this.state, [e.target.name]:e.target.value})
    }
    
    _updateCourier(e){
        e.preventDefault();
		Axios.post(updateCourierProfileApi, this.state);
		// use the returned courier
		history.push('/courier/profile')
    }

	render(){
		const courier = this.state.courier
		return(
			<div>
				<form onSubmit={this._updateCourier}>
					<div className="courier-form">
						<label>Username</label>
						<input type="text" name="username" onChange={this._handleChange} />
					</div>
					<div className="courier-form">
						<label>Email</label>
						<input type="email" name="email"  onChange={this._handleChange} />
					</div>
					<div className="courier-form">
						<label>image</label>
						<input type="text" name="img" onChange={this._handleChange}/>
					</div>
					<div className="courier-form">
						<label>phone</label>
						<input type="text" name="phone" onChange={this._handleChange}/>
					</div>
					<button>Save</button>
				</form>
			</div>
		)
	}
}