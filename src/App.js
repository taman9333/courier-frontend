import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Link , Route } from 'react-router-dom';
import requireAuth from './utils/requireAuth'
import CourierRegistration from './pages/CourierRegistrations';
import CourierLogin from './pages/CourierLogins';
import CourierPage from './pages/CourierPage';
// import ForgotPassword from './pages/ForgotPassword';

import HomePage from './pages/HomePage'
import UserLogin from './containers/ClientLoginContainer';
import ClientProfile from './containers/ClientProfileContainer';
import CreateOrder from './containers/CreateOrderContainer';
import OrderDetails from './containers/OrderDetailsContainer';


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
        {
          localStorage.getItem('jwtToken') === null?
          <Link to="/register">Register</Link>
          : null
        }
        <Link to="/">Home</Link>
        {
          localStorage.getItem('jwtToken') !== null?
              <Link to='/clientprofile'>Your profile</Link>
            :  null
        }
        <Route path='/' exact component={UserLogin}/>
        <Route path='/clientprofile' component={requireAuth(ClientProfile)}/>
        <Route path='/register' component={HomePage}/>
        <Route path='/client/createorder' exact component={requireAuth(CreateOrder)}/>
        <Route path='/orderdetails' exact component={requireAuth(OrderDetails)}/>
        <footer><p>&copy; 2018 HAT.com</p></footer>
      </div>
    );
  }
}

export default App;


