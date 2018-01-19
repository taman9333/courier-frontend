import React, { Component } from 'react';
import './style.css'

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
		// history.push('/courier');
	}
	

	render(){
		const {courier} = this.props;
		return(
			<div>
				<form className="courier-profile-container jumbotron" id="newCourier" name="newCourier" onSubmit={this._updateCourier}>
					<div className="form-group row">
						<label className="col-sm-3 col-form-label" >Username</label>
						<div className="col-sm-7">
							<input className="form-control"  type="text" name="username" value={this.state.username} id="username" onChange={this._handleChange} />
						</div>
					</div>
					<div className="form-group row">
						<label className="col-sm-3 col-form-label">Email</label>
						<div className="col-sm-7">
							<input className="form-control"  type="email" name="email" id="email"  value={this.state.email} onChange={this._handleChange}/>
						</div>
					</div>
					<div className="form-group row">
						<label className="col-sm-3 col-form-label">Image</label>
						<div className="col-sm-7">
							<input className="form-control-file" type="file" name="img" id="img" onChange={this._handleChange} />
						</div>
					</div>
					<div className="form-group row">
						<label className="col-sm-3 col-form-label">Phone</label>
						<div className="col-sm-7">
							<input className="form-control"  type="text" name="phone" id="phone" value={this.state.phone} onChange={this._handleChange}/>
						</div>
					</div>
					<button className="btn btn-success">Save</button>
				</form>
			</div>
		)
	}
}

