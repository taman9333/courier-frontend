import React, { Component } from 'react';
// import {updateClientProfileApi} from '../../apiConfig';
// import Axios from 'axios';
// import history from '../../history'
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
			<div className="float-left">
				<form id="newClient" name="newClient" onSubmit={this._updateClient}>
					<div className="client-form">
						<label className="link" >Username</label>
						<input className="link" type="text" name="username" value={this.state.username} id="username" onChange={this._handleChange} />
					</div>
					<div className="client-form">
						<label className="link">Email</label>
						<input className="link" type="email" name="email" id="email"  value={this.state.email} onChange={this._handleChange}/>
					</div>
					<div className="client-form">
						<label className="link">image</label>
						{/* <img className="link" alt="" src={client.img.url == null? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcAjO1-yy10xV5ylPfYoPrnpgC8w5TlaUmF9B_BTol5VGia5rp' :`http://localhost:3000/${this.props.client.img.url}`}/> */}
						<br />
						<input className="link" type="file" name="img" id="img" onChange={this._handleChange} />
					</div>
					<div className="client-form">
						<label className="link">phone</label>
						<input className="link" type="text" name="phone" id="phone" value={this.state.phone} onChange={this._handleChange}/>
					</div>
					{/* <input type="hidden" name="_method" value="patch" /> */}
					<button>Save</button>
				</form>
			</div>
		)
	}
}

// {<img alt="" src={`http://localhost:3000/${this.state.img.url}`}/> }
