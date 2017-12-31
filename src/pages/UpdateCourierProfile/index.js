import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import Form from '../../containers/UpdateCourierProfileContainer';


export default class UpdateCourierProfile extends Component {
	render (){
		return (
			<div>
				<h2>Update Your Profile</h2>
				<Form />
			</div>
		)
	}
}
