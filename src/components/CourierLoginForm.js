import React, { Component } from 'react';
// import './style.css'
import { Link} from 'react-router-dom';
// import{ login } from '../actions/AuthActions.js';

export default class CourierLoginForm extends Component{
    constructor(){
      super()
      this.state = {
        email:'',
        password:''
      }
      this._handleChange = this._handleChange.bind(this)
    }
  
    _handleChange(e){
      this.setState({...this.state, [e.target.name]:e.target.value})
    }
  
    render(){
      const courier = {}
      courier["courier"] = this.state
      return(
        <div>
          <form onSubmit={(e)=>{e.preventDefault() ;this.props.newCourierSession(courier)}}>
          <div className="courier-form">
            <label>Email</label>
            <input type="email" name="email" onChange={this._handleChange} />
          </div>
          <div className="courier-form">
            <label>password</label>
            <input type="password" name="password" onChange={this._handleChange}/>
          </div>
          <button>Login</button>
          </form>
          <Link to="/courier/register">Don't have an account? Register</Link>
          <Link to="/courier/forgotpassword">Forgot Password</Link>
          <Link to="/client/login">Client?</Link>

        </div>
      )
    }
  }