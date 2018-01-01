import React, { Component } from 'react';
import HomePage from './pages/HomePage'
import {Link, Route} from 'react-router-dom';
import UserLogin from './containers/ClientLoginContainer';
import ClientProfile from './containers/ClientProfileContainer';
import requireAuth from './utils/requireAuth';
import CreateOrder from './containers/CreateOrderContainer';
import OrderDetails from './containers/OrderDetailsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
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
    </div>
    );
  }
}

export default App;
