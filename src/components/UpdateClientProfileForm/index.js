import React, { Component } from 'react';
import './style.css'

export default class UpdateClientProfile extends Component{
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			phone: '',
			img:''
		}
		this._updateClient = this._updateClient.bind(this);
		this._handleChange = this._handleChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.client.id) {
			const {username, email, phone, img} = nextProps.client;
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

    _updateClient(e){
		e.preventDefault();
		var newClient = document.getElementById('newClient');
		var client = new FormData(newClient);
		this.props.updateClient(client);
		// history.push('/client');
    }

	render(){
		const {client} = this.props;
		return(
			<div >
				<form className="jumbotron" id="newClient" name="newClient" onSubmit={this._updateClient}>
					<div className="form-group row">
						<label className="col-sm-3 col-form-label" >Username</label>
						<div className="col-sm-7">
							<input className="form-control" type="text" name="username" value={this.state.username} id="username" onChange={this._handleChange} />
						</div>
					</div>
					<div className="form-group row">
						<label className="col-sm-3 col-form-label">Email</label>
						<div className="col-sm-7">
							<input className="form-control" type="email" name="email" id="email"  value={this.state.email} onChange={this._handleChange}/>
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
							<input className="form-control" type="text" name="phone" id="phone" value={this.state.phone} onChange={this._handleChange}/>
						</div>
					</div>
					<button className="btn btn-success">Save</button>
				</form>
			</div>
		)
	}
}
