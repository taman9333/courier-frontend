import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Route } from 'react-router-dom';
import requireAuth from './utils/requireAuth'
import CourierRegistration from './pages/CourierRegistrations';
import CourierLogin from './pages/CourierLogins';
import CourierPage from './pages/CourierPage';
// import ForgotPassword from './pages/ForgotPassword';



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
          <Route path="/courier/profile" exact component={requireAuth(CourierPage)} />
          {/* <Route path="/forgotpassword" exact component={ForgotPassword} /> */}
        </div>
        <footer><p>&copy; 2018 HAT.com</p></footer>
      </div>
    );
  }
}

export default App;


