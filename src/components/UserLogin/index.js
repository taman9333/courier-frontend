import React, {Component} from 'react';
import './style.css'

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
    return(
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
    )
  }
}
