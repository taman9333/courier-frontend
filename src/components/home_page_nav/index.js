import React, {Component} from 'react'
import './style.css'
import ClientLogin from '../../containers/ClientLoginContainer'
import CourierLogin from '../../containers/CourierLoginContainer'
import {Link} from 'react-router-dom'

export default class HomePageNav extends Component{

  constructor(props){
    super(props);
    this.state={
      login:(typeof props.query === 'undefined')? 1 : props.query
    }
  }

  _changeLogin(e){
    if (this.state.login === 1) {
      this.setState({...this.state, login:2})
    }else{
      this.setState({...this.state, login:1})
    }
  }

  render(){
    return(
      <div className="home-container">
        <div className="home-page-nav">
          <Link to="/">
            <img className="web-logo" src="../../../wassaly-logo3.png" />
            <p>Wassaly</p>
          </Link>
          <div className="login-float">
          {
            this.props.url !== undefined?
            null
            :this.state.login === 1?
              <ClientLogin changeLogin={this._changeLogin.bind(this)} />
              :<CourierLogin changeLogin={this._changeLogin.bind(this)} />
          }
          </div>
        </div>
      </div>
    )
  }

}
