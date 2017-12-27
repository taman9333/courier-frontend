import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
// import CourierRegisteration from './pages/CourierRegisterations';
import CourierLogin from './components/CourierLoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="HAT">Welcome to HAT</h1>
        </header>
        <div className="App-container">
          {/* <Route path="/" exact component={CourierRegisteration} /> */}
          <Route path="/" exact component={CourierLogin} />
          {/* <Route path="/client/login" component={ClientLogin} /> */}
        </div>
      </div>
    );
  }
}

export default App;

