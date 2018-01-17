import React, {Component} from 'react';
import './style.css'
import history from '../../history'
import HomePageNav from '../home_page_nav'

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
    return(
      <div>
        <HomePageNav url={this.props.location.pathname} />

        <form className="jumbotron" name="newClient" id="newClient" onSubmit={(e)=> this.handleSubmit(e)}>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Username</label>
            <div className="col-sm-7">
              <input className="form-control" type="text" name="username" id="username" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Email</label>
            <div className="col-sm-7">
              <input className="form-control" type="email" name="email" id="email"  />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Image</label>
            <div className="col-sm-7">
              <input className="form-control-file" type="file" name="img" id="img" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Phone</label>
            <div className="col-sm-7">
              <input className="form-control" type="text" name="phone" id="phone" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Password</label>
            <div className="col-sm-7">
              <input className="form-control" type="password" name="password" id="password" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Password confirmation</label>
            <div className="col-sm-7">
              <input className="form-control" type="password" name="password_confirmation" id="password_confirmation" />
            </div>
          </div>
          <button className="btn btn-success">Register</button>
        </form>
      </div>
    )
  }
}

/* {
  this.props.flashMessage.constructor.name === 'Array'?
    <div id="flash-message-error">
      {
        this.props.flashMessage.map((item, i)=>
          <p key={i} className="flash-message-error"><span>&#10005;</span>{item}</p>
        )
      }
    </div>
  :null


} */
