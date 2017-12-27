import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import CourierRegisterations from '../../containers/CourierRegisterationsContainer';


export default class CourierRegisterationPage extends Component {
    render (){
        return (
            <div>
                <h2>Register as a Courier</h2>
                <CourierRegisterations />
                {/* <Route path="/courier/register" component={CourierRegisterations} /> */}
            </div>
        )
    }
}
