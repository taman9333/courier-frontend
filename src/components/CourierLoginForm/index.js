import React, { Component } from 'react';
import './style.css'
import { Link} from 'react-router-dom';

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
      const courier = this.state
      return(
        <div className="courier-login">
          <form className="form-inline" onSubmit={(e)=>{e.preventDefault(); this.props.courierLogin(courier)}}>
          <div className="courier-login-form form-group">
            <label>Email</label>
            <input className="form-control mx-sm-3" type="email" name="email" onChange={this._handleChange} />
            <label>Password</label>
            <input className="form-control mx-sm-3" type="password" name="password" onChange={this._handleChange}/>
          </div>
          <button className="btn btn-sm login-button">Log In</button>
          </form>
          <div className="links-down-login">
            <p>Register as <Link to="/register/courier">Courier</Link> <Link to="/register/client">Client</Link></p>
            <a onClick={()=>{this.props.changeLogin()}}>Client?</a>
          </div>
        </div>
      )
    }
  }


  // <Link to="/register/courier">Don't have an account? Register</Link>
  // <Link to="/forgotpassword">Forgot Password</Link>
  // <Link to="/">Client?</Link>
