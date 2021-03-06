import React, { Component } from 'react';
import './style.css'
import { Link } from 'react-router-dom';

export default class CourierSideBar extends Component{
    render(){
      return(
        <div id="sidebar" className="float-left">
          <nav>
            <ul>
              <li><Link to="/courier/notifications">Notifications</Link></li>
              <li><Link to="/courier">View Profile</Link></li>
              {/* <li><Link to="/courier/reviews">Reviews</Link></li> */}
              <li><Link to="/courier/auctions">Open Auctions</Link></li>
              {/* <li><Link to="/courier/bids">Bids</Link></li> */}
              <li><Link to="/courier/deliveries">Deliveries</Link></li>
            </ul>
          </nav>
        </div>
      )
    }
  }
