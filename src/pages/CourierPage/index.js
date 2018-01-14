import React, { Component } from 'react';
import CourierNav from '../../containers/CourierHeaderContainer';
import requireCourierAuth from '../../utils/requireCourierAuth';



import { Link, Route } from 'react-router-dom';
import Header from '../../containers/CourierHeaderContainer';
import SideBar from '../../components/CourierSideBar';
import CourierProfile from '../../containers/CourierProfileContainer';
import UpdateCourierProfile from '../../containers/CourierUpdateProfileContainer';
import ResetPassword from '../../components/ResetPassword';
// import CourierReviews from '../../components/CourierReviews';
// import OpenAuctions from '../../components/open_auctions';
// import AuctionDetails from '../../component/CourierAuctionDetails';
// import CourierBids from '../../components/CourierBids';
import CourierDelivery from '../../components/courier_deliveries';
import CourierDeliveryDetails from '../../components/courier_delivery_details';
import OpenAuctions from '../../components/open_auctions';
import AuctionDetails from '../AuctionDetails';
// import requireCourierAuth from '../../utils/requireCourierAuth'
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
				<CourierNav />
				<div className="vertical-menu">
         <Link className="sidebarLinks" to="/courier" >View Profile</Link>
         <Link className="sidebarLinks" to="/courier/auctions" >Open Auctions</Link>
         <Link className="sidebarLinks" to="/courier/deliveries">Deliveries</Link>
         </div>


					<Route path="/courier/profile" exact component={CourierProfile} />
					<Route path="/courier/updateprofile" exact component={UpdateCourierProfile} />
					<Route path="/courier/resetpassword" exact component={ResetPassword} />
					{/* <Route path="/courier/reviews" exact component={CourierReviews} /> */}
					{/* <Route path="/courier/openauctions" exact component={OpenAuctions} /> */}
					<Route path="/courier/deliveries" exact component={CourierDelivery} />
					<Route path="/courier/deliveries/:id" component={CourierDeliveryDetails} />
					<Route path="/courier/auctions" component={OpenAuctions} />
					<Route path='/courier/auctiondetails/:id' component={requireCourierAuth(AuctionDetails)} />
					{/* <Route path="/courier/bids" exact component={CourierBids} /> */}

					{/* <Route path="/courier/notifications" exact component={CourierNotifications} /> */}

			</div>
		)
	}
}

// <Header />
// <SideBar />

// {
// 	this.props.location.pathname == '/courier'?
// 	<CourierProfile />
// 	:null
// }
