import React, { Component } from 'react';
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
import requireCourierAuth from '../../utils/requireCourierAuth'
import CourierNotifications from '../../components/notifications';

export default class CourierPage extends Component {

	render (){
		return (
			<div>
				<Header />
				<SideBar />
				<div>
					{
						this.props.location.pathname == '/courier'?
						<CourierProfile />
						:null
					}

					{/* <Route path="/courier" exact component={requireCourierAuth(CourierProfile)} /> */}
					<Route path="/courier/updateprofile" exact component={requireCourierAuth(UpdateCourierProfile)} />
					<Route path="/courier/resetpassword" exact component={requireCourierAuth(ResetPassword)} />
					{/* <Route path="/courier/reviews" exact component={CourierReviews} /> */}
					{/* <Route path="/courier/openauctions" exact component={OpenAuctions} /> */}
					<Route path="/courier/deliveries" exact component={requireCourierAuth(CourierDelivery)} />
					<Route path="/courier/deliveries/:id" component={requireCourierAuth(CourierDeliveryDetails)} />
					<Route path="/courier/auctions" component={requireCourierAuth(OpenAuctions)} />
					<Route path='/courier/auctiondetails/:id' component={requireCourierAuth(AuctionDetails)} />
					{/* <Route path="/courier/bids" exact component={CourierBids} /> */}

					<Route path="/courier/notifications" exact component={CourierNotifications} />
				</div>
			</div>
		)
	}
}
