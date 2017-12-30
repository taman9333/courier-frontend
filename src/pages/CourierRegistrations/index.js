import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import CourierRegistrations from '../../containers/CourierRegistrationsContainer';


export default class CourierRegistrationPage extends Component {
    render (){
        return (
            <div>
                <h2>Register as a Courier</h2>
                <CourierRegistrations />
                {/* <Route path="/courier/register" component={CourierRegistrations} /> */}
            </div>
        )
    }
}
