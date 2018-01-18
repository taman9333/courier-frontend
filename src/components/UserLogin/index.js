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
    if (localStorage.getItem('jwtToken') !== null) {
      return null
    }else {
      return(
        <div className="client-login">
          <div>
          {
            this.props.flashMessage === undefined?
              null
              :this.props.flashMessage.message === undefined?
              null
              :<div className="flash-message-success">{this.props.flashMessage.message}</div>
          }
          {
            this.props.flashMessage === undefined?
              null
              :this.props.flashMessage.error === undefined?
              null
              :<div className="flash-message-failure">{this.props.flashMessage.error}</div>
          }
        <form className="form-inline" onSubmit={(e)=>{e.preventDefault() ;this.props.loginClient(this.state)}}>
          <div className="client-login-form form-group">
            <label htmlFor="email">Email</label>
            <input className="form-control mx-sm-3" type="email" name="email" id="email" onChange={this._handleChange} />
            <label htmlFor="password">Password</label>
            <input className="form-control mx-sm-3" type="password" name="password" id="password" onChange={this._handleChange} />
          </div>
          <button className="btn btn-sm login-button">Log In</button>
        </form>
        <div className="links-down-login">
          <p>Register as <Link to="/register/client">Client</Link> <Link to="/register/courier">Courier</Link></p>
          <a onClick={()=>{this.props.changeLogin()}}>Courier?</a>
        </div>
        </div>
        </div>
      )
    }
  }
}


// <Link className="link" to="/register/client">Register</Link>
// <Link className="link" to="/login/courier">Login as courier</Link>
//<Home />

// {
//     this.props.flashMessage.message === undefined?
//   null
//   :<div className="flash-message-success"><span>&#x2714;</span>{this.props.flashMessage.message}</div>
// }
// {
//     this.props.flashMessage.error === undefined?
//   null
//   :<div className="flash-message-failure"><span>&#10005;</span>{this.props.flashMessage.error}</div>
// }
