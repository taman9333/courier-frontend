import React, { Component } from 'react';
import HomePage from './pages/HomePage'
import {Link, Route} from 'react-router-dom';
import UserLogin from './containers/UserLoginContainer'
import {ClientProfileContainer} from './containers/UserLoginContainer'
import requireAuth from './utils/requireAuth'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/register">Register</Link>
        <Link to="/">Home</Link>
        <Route path='/' exact component={UserLogin}/>
        <Route path='/clientprofile' component={requireAuth(ClientProfileContainer)}/>
        <Route path='/register' component={HomePage}/>
      </div>
    );
  }
}

export default App;
