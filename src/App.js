import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Link , Route } from 'react-router-dom';
import requireAuth from './utils/requireAuth'
import CourierRegistration from './pages/CourierRegistrations';
import CourierLogin from './pages/CourierLogins';
import CourierPage from './pages/CourierPage';
// import CourierProfile from './containers/CourierProfileContainer';
// import ForgotPassword from './pages/ForgotPassword';
import requireCourierAuth from './utils/requireCourierAuth'

import HomePage from './pages/HomePage'
import UserLogin from './containers/ClientLoginContainer';
import ClientProfile from './containers/ClientProfileContainer';
import CreateOrder from './containers/CreateOrderContainer';
import OrderDetails from './containers/OrderDetailsContainer';
import LoadingBar from 'react-redux-loading-bar'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">

        <LoadingBar className="loading"/>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="HAT">Welcome to HAT</h1>
        </header>
        <div className="App-container">

          <Route path="/register/courier" exact component={CourierRegistration} />
          <Route path="/login/courier" exact component={CourierLogin} />
          <Route path="/courier/profile"  component={requireCourierAuth(CourierPage)} />
          {/* <Route path="/forgotpassword" exact component={ForgotPassword} /> */}
        </div>

        {
          localStorage.getItem('clientAuth') !== "true"?
          <Link to="/register/client">Register</Link>
          : <Link to="/client/profile">Your profile</Link>
        }
        <Link to="/">Home</Link>
        <Route path='/' exact component={UserLogin}/>
        <Route path='/client/profile' component={requireAuth(ClientProfile)}/>
        <Route path='/register/client' component={HomePage}/>
        <Route path='/client/createorder' exact component={requireAuth(CreateOrder)}/>
        <Route path='/orderdetails' exact component={requireAuth(OrderDetails)}/>
        <footer><p>&copy; 2018 HAT.com</p></footer>
      </div>
    );
  }
}

export default App;
