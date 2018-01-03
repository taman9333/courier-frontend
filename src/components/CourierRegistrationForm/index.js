import React, { Component } from 'react';
// import './style.css'

export default class CourierRegistrationForm extends Component{
  constructor(){
    super()
    this.state = {
      username:'',
      email:'',
      password:'',
      password_confirmation:'',
      phone:'',
      img:''
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
        {
          this.props.registerFlashMessage.constructor.name !== 'Array'?
            null
          :
          <div id="flash-message-error">
            {
              this.props.registerFlashMessage.map((item, i)=>
                <p key={i} className="flash-message-error"><span>&#10005;</span>{item}</p>
              )
            }
          </div>

        }
        <form onSubmit={(e)=>{e.preventDefault() ;this.props.addCourier(courier)}}>
        <div className="courier-form">
          <label>Username</label>
          <input type="text" name="username" onChange={this._handleChange} />
        </div>
        <div className="courier-form">
          <label>Email</label>
          <input type="email" name="email" onChange={this._handleChange} />
        </div>
        <div className="courier-form">
          <label>image</label>
          <input type="text" name="img" onChange={this._handleChange}/>
        </div>
        <div className="courier-form">
          <label>phone</label>
          <input type="text" name="phone" onChange={this._handleChange}/>
        </div>
        <div className="courier-form">
          <label>password</label>
          <input type="password" name="password" onChange={this._handleChange}/>
        </div>
        <div className="courier-form">
          <label>password confirmation</label>
          <input type="password" name="password_confirmation" onChange={this._handleChange}/>
        </div>
        <button>Register</button>
        </form>
      </div>
    )
  }
}