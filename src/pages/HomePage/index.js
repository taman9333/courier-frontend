import React, {Component} from 'react'
import UserRegister from '../../containers/ClientRegisterContainer'
import './style.css'
import HomePageNav from '../../components/home_page_nav'
import { Link , Route } from 'react-router-dom';
import UserLogin from '../../containers/ClientLoginContainer';
import CourierLogin from '../CourierLogins';
export default class HomePage extends Component{
  render(){
    return(
      <div>
        <HomePageNav />
        {/* <Route path="/login/client" exact component={UserLogin} />
        <Route path="/login/courier" exact component={CourierLogin} /> */}
          <h2>About</h2>
          <p>Expedited Courier Group, a premier Baltimore-based messenger and courier logistics service is committed to providing first-class messenger services to its customers around the clock – with reasonable rates on a consistent basis. At ECG we enable our customers – Legal, Medical, Industrial, Automotive, and Same Day Long Distance; to prosper by delivering their products on time in a professional manner. Our company will continuously challenge ourselves to exceed our customers’ expectations by providing leading edge courier and messenger solutions to their needs.</p>
      </div>
    )
  }
}


// <h1>Registration Page</h1>
// <UserRegister />
