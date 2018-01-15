
import React, {Component} from 'react';
import './style.css'
import history from '../../history'

export default class UserRegister extends Component{
  // constructor(){
  //   super()
  //   this.state = {
  //     username:'',
  //     email:'',
  //     password:'',
  //     password_confirmation:'',
  //     phone:'',
  //     img:''
  //   }
  //   this._handleChange = this._handleChange.bind(this)
  // }

  // _handleChange(e){
  //   this.setState({...this.state, [e.target.name]:e.target.value})
  // }

  handleSubmit(event) {
    event.preventDefault();
    var newClient = document.getElementById('newClient');
    var client = new FormData(newClient);
    this.props.createClient(client);
  }

  componentWillMount(){
    if (localStorage.getItem('jwtToken') !== null) {
      history.push('/')
    }
  }


  render(){
    // const client = {}
    // client["client"] = this.state
    return(
      <div>
        {/* {
          this.props.flashMessage.constructor.name === 'Array'?
            <div id="flash-message-error">
              {
                this.props.flashMessage.map((item, i)=>
                  <p key={i} className="flash-message-error"><span>&#10005;</span>{item}</p>
                )
              }
            </div>
          :null


        } */}
        <form name="newClient" id="newClient" onSubmit={(e)=> this.handleSubmit(e)}>
        <div className="user-form">
          <label>Username</label>
          <input type="text" name="username" />
        </div>
        <div className="user-form">
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div className="user-form">
          <label>image</label>
          <input type="file" name="img" />
        </div>
        <div className="user-form">
          <label>phone</label>
          <input type="text" name="phone" />
        </div>
        <div className="user-form">
          <label>password</label>
          <input type="password" name="password" />
        </div>
        <div className="user-form">
          <label>password confirmation</label>
          <input type="password" name="password_confirmation" />
        </div>
        <button>Submit</button>
        </form>
      </div>
    )
  }
}