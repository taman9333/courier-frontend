import React, { Component } from 'react';
// import {updateCourierProfileApi} from '../../apiConfig';
// import Axios from 'axios';
// import history from '../../history'
// import './style.css'

export default class UpdateCourierProfile extends Component{
	constructor(props) {
		super(props);
		this._updateCourier = this._updateCourier.bind(this);
	}
    
    _updateCourier(e){
		e.preventDefault();
		var newCourier = document.getElementById('newCourier');
		var courier = new FormData(newCourier);
		this.props.updateCourier(courier);
		// history.push('/courier/profile');
    }

	render(){
		const {courier} = this.props
		return(
			<div>
				<form id="newCourier" name="newCourier" onSubmit={this._updateCourier}>
					<div className="courier-form">
						<label>Username</label>
						<input type="text" name="username" placeholder={this.props.courier.username} id="username"  />
					</div>
					<div className="courier-form">
						<label>Email</label>
						<input type="email" name="email" id="email"  placeholder={this.props.courier.email}/>
					</div>
					<div className="courier-form">
						<label>image</label>
						{/* <img alt="" src={`http://localhost:3000/${this.props.courier.img.url}`}/> */}
						<input type="file" name="img" id="img" />
					</div>
					<div className="courier-form">
						<label>phone</label>
						<input type="text" name="phone" id="phone" placeholder={this.props.courier.phone}/>
					</div>
					{/* <input type="hidden" name="_method" value="patch" /> */}
					<button>Save</button>
				</form>
			</div>
		)
	}
}