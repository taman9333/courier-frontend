import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Route } from 'react-router-dom';
import CourierRegistration from './pages/CourierRegistrations';
import CourierLogin from './containers/CourierLoginsContainer';

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
          {/* <Route path="/client/login" component={ClientLogin} /> */}
        </div>
      </div>
    );
  }
}

export default App;

