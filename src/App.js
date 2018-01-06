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
import OrderDetails from './pages/OrderDetails';
import LoadingBar from 'react-redux-loading-bar'
import './App.css'

import AuctionDetails from './pages/AuctionDetails'

class App extends Component {
  render() {
    return (
      <div className="App">

        <LoadingBar className="loading"/>

        <header className="App-header">
        </header>
        <div className="App-container">

          <Route path="/register/courier" exact component={CourierRegistration} />
          <Route path="/login/courier" exact component={CourierLogin} />
          <Route path="/courier/profile"  component={requireCourierAuth(CourierPage)} />
          {/* <Route path="/forgotpassword" exact component={ForgotPassword} /> */}
        </div>



        <Route path='/' exact component={UserLogin}/>
        <Route path='/client/profile' component={requireAuth(ClientProfile)}/>
        <Route path='/register/client' component={HomePage}/>
        <Route path='/client/createorder' exact component={requireAuth(CreateOrder)}/>
        <Route path='/orderdetails/:id' exact component={requireAuth(OrderDetails)}/>

        <Route path='/courier/auctiondetails/:id' component={requireCourierAuth(AuctionDetails)} />

        <footer><p>&copy; 2018 HAT.com</p></footer>
      </div>
    );
  }
}

export default App;


// {
//   localStorage.getItem('clientAuth') !== "true"?
//   <Link to="/register/client">Register</Link>
//   : <Link to="/client/profile">Your profile</Link>
// }

// <Link to="/">Home</Link>
