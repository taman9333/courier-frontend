import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Link , Route } from 'react-router-dom';
import requireAuth from './utils/requireAuth';
import requireCourierAuth from './utils/requireCourierAuth';
import CourierRegistration from './pages/CourierRegistrations';
import CourierLogin from './pages/CourierLogins';
import CourierPage from './pages/CourierPage';
import ForgotPassword from './components/ForgotPassword';
import HomePage from './pages/HomePage';
import UserLogin from './containers/ClientLoginContainer';
import ClientHomePage from './pages/ClientHomePage';
// import CreateOrder from './containers/CreateOrderContainer';
import OrderDetails from './pages/OrderDetails';
import LoadingBar from 'react-redux-loading-bar';
import './App.css';
// import ClientDeliveries from './components/client_deliveries';
// import ClientDeliveriesDetails from './components/client_deliveries_details';


class App extends Component {
  render() {
    return (
      <div className="App">
        <LoadingBar className="loading"/>
        <header className="App-header">
        </header>
        <div className="App-container">
          <Route path='/' exact component={UserLogin}/>
          <Route path='/client' component={requireAuth(ClientHomePage)}/>
          <Route path='/register/client' component={HomePage}/>

          <Route path='/client/orderdetails/:id' exact component={requireAuth(OrderDetails)}/>

          <Route path="/forgotpassword" exact component={ForgotPassword} />

          <Route path="/register/courier" exact component={CourierRegistration} />
          <Route path="/login/courier" exact component={CourierLogin} />
          <Route path="/courier"  component={requireCourierAuth(CourierPage)} />
        </div>
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

// <Route path='/client/createorder' exact component={requireAuth(CreateOrder)}/>

// <Route path='/client/deliveries' exact component={ClientDeliveries} />


// <Route path='/client/deliveries/:id'  component={ClientDeliveriesDetails} />
