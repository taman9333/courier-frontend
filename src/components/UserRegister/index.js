import React, {Component} from 'react';
import './style.css'
import history from '../../history'

export default class UserRegister extends Component{
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


  componentWillMount(){
    if (localStorage.getItem('jwtToken') !== null) {
      history.push('/')
    }
  }


  render(){
    const client = {}
    client["client"] = this.state
    return(
      <div>
        {
          Object.keys(this.props.flashMessage).length === 0?
            null
          :
          <div id="flash-message-error">
            {
              this.props.flashMessage.map((item, i)=>
                <p key={i} className="flash-message-error"><span>&#10005;</span>{item}</p>
              )
            }
          </div>

        }
        <form onSubmit={(e)=>{e.preventDefault() ;this.props.createClient(client)}}>
        <div className="user-form">
          <label>Username</label>
          <input type="text" name="username" onChange={this._handleChange} />
        </div>
        <div className="user-form">
          <label>Email</label>
          <input type="email" name="email" onChange={this._handleChange} />
        </div>
        <div className="user-form">
          <label>image</label>
          <input type="text" name="img" onChange={this._handleChange}/>
        </div>
        <div className="user-form">
          <label>phone</label>
          <input type="text" name="phone" onChange={this._handleChange}/>
        </div>
        <div className="user-form">
          <label>password</label>
          <input type="password" name="password" onChange={this._handleChange}/>
        </div>
        <div className="user-form">
          <label>password confirmation</label>
          <input type="password" name="password_confirmation" onChange={this._handleChange}/>
        </div>
        <button>Submit</button>
        </form>
      </div>
    )
  }
}
