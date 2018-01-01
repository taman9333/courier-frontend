import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import Form from '../../containers/CourierRegistrationContainer';


export default class CourierRegistrationsPage extends Component {
    render (){
        return (
            <div>
                <h2>Register as a Courier</h2>
                <Form />
            </div>
        )
    }
}
