import React, { Component } from 'react';
import Home from '../../components/HomeContents';
import CourierLogin from '../../containers/CourierLoginContainer';
export default class CourierLoginsPage extends Component {
    render (){
        return (
            <div>
                <CourierLogin />
                <Home />
            </div>
        )
    }
}
