import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Route } from 'react-router-dom';
import CourierRegistration from './pages/CourierRegistrations';
// import ForgotPassword from './pages/ForgotPassword';
import CourierLogin from './pages/CourierLogins';
// import requireAuth from './utils/requireAuth'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="HAT">Welcome to HAT</h1>
        </header>
        <div className="App-container">
          <Route path="/courier/register" exact component={CourierRegistration} />
          <Route path="/courier/login" exact component={CourierLogin} />
          {/* <Route path='/courier/login' component={requireAuth(CourierLogin)}/> */}
          {/* <Route path="/forgotpassword" exact component={ForgotPassword} /> */}
        </div>
        <footer><p>&copy; 2018 HAT.com</p></footer>
      </div>
    );
  }
}

export default App;

