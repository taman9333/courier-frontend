import React, { Component } from 'react';
// import {updateCourierProfileApi} from '../../apiConfig';
// import Axios from 'axios';
// import history from '../../history'
// import './style.css'

export default class UpdateCourierProfile extends Component{
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			phone: '',
			img:''
		}
		this._updateCourier = this._updateCourier.bind(this);
		this._handleChange = this._handleChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.courier.id) {
			const {username, email, phone, img} = nextProps.courier;
			this.setState({
				username,
				email,
				phone, 
				img
			});
		}
	}

	_handleChange(e){
		this.setState({...this.state, [e.target.name]:e.target.value})
	}
    
    _updateCourier(e){
		e.preventDefault();
		var newCourier = document.getElementById('newCourier');
		var courier = new FormData(newCourier);
		this.props.updateCourier(courier);
		// history.push('/courier/profile');
    }

	render(){
		const {courier} = this.props;
		return(
			<div>
				<form id="newCourier" name="newCourier" onSubmit={this._updateCourier}>
					<div className="courier-form">
						<label>Username</label>
						<input type="text" name="username" value={this.state.username} id="username" onChange={this._handleChange} />
					</div>
					<div className="courier-form">
						<label>Email</label>
						<input type="email" name="email" id="email"  value={this.state.email} onChange={this._handleChange}/>
					</div>
					<div className="courier-form">
						<label>image</label>
						{/* <img alt="" src={`http://localhost:3000/${this.state.img.url}`}/> */}
						<input type="file" name="img" id="img" onChange={this._handleChange} />
					</div>
					<div className="courier-form">
						<label>phone</label>
						<input type="text" name="phone" id="phone" value={this.state.phone} onChange={this._handleChange}/>
					</div>
					{/* <input type="hidden" name="_method" value="patch" /> */}
					<button>Save</button>
				</form>
			</div>
		)
	}
}