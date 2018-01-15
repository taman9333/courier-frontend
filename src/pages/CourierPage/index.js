import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from '../../containers/CourierHeaderContainer';
import SideBar from '../../components/CourierSideBar';
import CourierProfile from '../../containers/CourierProfileContainer';
import UpdateCourierProfile from '../../containers/CourierUpdateProfileContainer';
import ResetPassword from '../../components/ResetPassword';
import CourierDelivery from '../../components/courier_deliveries';
import CourierDeliveryDetails from '../../components/courier_delivery_details';
import OpenAuctions from '../../components/open_auctions';
import AuctionDetails from '../AuctionDetails';
import requireCourierAuth from '../../utils/requireCourierAuth'
import CourierNotifications from '../../components/notifications';
// import CourierNotifications from '../../containers/CourierNotificationsContainer';
import './style.css'

export default class CourierPage extends Component {

	componentDidMount(){
    var links = document.querySelectorAll('.sidebarLinks');
    Array.prototype.forEach.call(links, (link)=>{
      if (link.getAttribute('href') == this.props.location.pathname) {
        link.className += " active"
      }
    })
  }

	render (){
		return (
			<div>
				{/* // <Header />
				// <SideBar />
				// <div className="float-left">
				// 	{
				// 		this.props.location.pathname == '/courier'?
				// 		<CourierProfile />
				// 		:null
				// 	} */}
				<Header />
				<div className="vertical-menu">
					<Link className="sidebarLinks" to="/courier" >View Profile</Link>
					<Link className="sidebarLinks" to="/courier/auctions" >Open Auctions</Link>
					<Link className="sidebarLinks" to="/courier/deliveries">Deliveries</Link>
				</div>
				<Route path="/courier" exact component={requireCourierAuth(CourierProfile)} />
				<Route path="/courier/updateprofile" exact component={requireCourierAuth(UpdateCourierProfile)} />
				<Route path="/courier/resetpassword" exact component={requireCourierAuth(ResetPassword)} />
				<Route path="/courier/deliveries" exact component={requireCourierAuth(CourierDelivery)} />
				<Route path="/courier/deliveries/:id" component={requireCourierAuth(CourierDeliveryDetails)} />
				<Route path="/courier/auctions" component={requireCourierAuth(OpenAuctions)} />
				<Route path='/courier/auctiondetails/:id' component={requireCourierAuth(AuctionDetails)} />
				{/* <Route path="/courier/bids" exact component={CourierBids} /> */}

				{/* <Route path="/courier/notifications" exact component={CourierNotifications} /> */}

			</div>
		)
	}
}

