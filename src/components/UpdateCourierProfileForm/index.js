// import React, { Component } from 'react';
// // import './style.css'

// export default class CourierRegistrationForm extends Component{
// 	constructor(){
// 		super()
// 		this.state = {
// 			username:'',
// 			email:'',
// 			phone:'',
// 			img:''
// 		}
// 		this._handleChange = this._handleChange.bind(this)
// 	}
	
// 	_handleChange(e){
// 		this.setState({...this.state, [e.target.name]:e.target.value})
// 	}

// 	render(){
// 		const courier = this.state.courier
// 		return(
// 			<div>
// 				<form onSubmit={(e)=>{e.preventDefault() ;this.props.updateCourier(courier)}}>
// 					<div className="courier-form">
// 						<label>Username</label>
// 						<input type="text" name="username" placeholder="${courier.username}" onChange={this._handleChange} />
// 					</div>
// 					<div className="courier-form">
// 						<label>Email</label>
// 						<input type="email" name="email" placeholder="${courier.email}" onChange={this._handleChange} />
// 					</div>
// 					<div className="courier-form">
// 						<label>image</label>
// 						<input type="text" name="img" placeholder="${courier.img}" onChange={this._handleChange}/>
// 					</div>
// 					<div className="courier-form">
// 						<label>phone</label>
// 						<input type="text" name="phone" placeholder="${courier.phone}" onChange={this._handleChange}/>
// 					</div>
// 					<button>Save</button>
// 				</form>
// 			</div>
// 		)
// 	}
// }