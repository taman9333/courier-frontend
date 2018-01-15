import React, {Component} from 'react';
import './style.css'
import {Link} from 'react-router-dom'
import Home from '../HomeContents';
export default class UserLogin extends Component{
  constructor(){
    super();
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
    // const client = {}
    // client["client"] = this.state
    if (localStorage.getItem('jwtToken') !== null) {
      return null
    }else {
      return(
        <div>
        {
            this.props.flashMessage.message === undefined?
          null
          :<div className="flash-message-success"><span>&#x2714;</span>{this.props.flashMessage.message}</div>
        }
        {
            this.props.flashMessage.error === undefined?
          null
          :<div className="flash-message-failure"><span>&#10005;</span>{this.props.flashMessage.error}</div>
        }
        <form onSubmit={(e)=>{e.preventDefault() ;this.props.loginClient(this.state)}}>
          <div className="client-login-form">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={this._handleChange} />
          </div>
          <div className="client-login-form">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={this._handleChange} />
          </div>
          <button>Submit</button>
        </form>
        <Link className="link" to="/register/client">Register</Link>
        <Link className="link" to="/login/courier">Login as courier</Link>
        <Home />
        </div>
      )
    }
  }
}
