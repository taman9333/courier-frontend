import React, {Component} from 'react'
import UserRegister from '../../containers/ClientRegisterContainer'

export default class HomePage extends Component{
  render(){
    return(
      <div>
        <h1>Registration Page</h1>
        <UserRegister />
      </div>
    )
  }
}
