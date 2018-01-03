import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from '../../containers/CourierHeaderContainer';
import SideBar from '../../components/CourierSideBar';
import CourierProfile from '../../containers/CourierProfileContainer';
// import UpdateCourierProfile from '../../containers/UpdateCourierProfileContainer';
// import ResetPassword from '../../containers/ResetPasswordContainer';
// import CourierReviews from '../../components/CourierReviews';

// import OpenAuctions from '../../containers/OpenAuctions';  asmaa sh3'ala feha

// import CourierBids from '../../components/CourierBids';
// import CourierDeliveries from '../../components/CourierDeliveries';
// import CourierNotifications from '../../containers/CourierNotificationsContainer';

export default class CouriePage extends Component {

	render (){
		return (
			<div>
				<Header />
				<SideBar />
				<div>
					<p>welcome to home</p>
					{
						this.props.location.pathname == '/courier'?
						<CourierProfile />
						:null
					}

					<Route path="/courier/profile" exact component={CourierProfile} />
					{/* <Route path="/courier/updateprofile" exact component={UpdateCourierProfile} /> */}
					{/* <Route path="/courier/resetpassword" exact component={ResetPassword} /> */}
					{/* <Route path="/courier/reviews" exact component={CourierReviews} /> */}

					

					{/* <Route path="/courier/bids" exact component={CourierBids} /> */}
					{/* <Route path="/courier/deliveries" exact component={CourierDeliveries} /> */}
					{/* <Route path="/courier/notifications" exact component={CourierNotifications} /> */}
				</div>
			</div>
		)
	}
}
