import React, { Component } from 'react';
// import './style.css'
import { Link } from 'react-router-dom';

export default class AuctionDetails extends Component{
	constructor(props){
    super(props);
    this.state={
			last_bid:0,
			new_bid:0
		}
  }

  _handleChange(e){
    this.setState({...this.state, [e.target.name]:e.target.value})
	}
	render(){
	  return(
		<div>
			<div>
				<p>Category: {this.state.auction.category}</p>
				<p>Weight: {this.state.auction.weight} kg</p>
				<p>Dimensions: {this.state.auction.dimensions}</p>
				<p>Bid deadline: {this.state.auction.auction.bid_deadline}</p>
				{/* didn't specify the order's open auction */}
				<p>Delivery date: {this.state.auction.delivery_date}</p>
				<p>Pickup Address:</p>
				<p>apartment #{this.state.auction.pickup_address.apartment_number}, building #{this.state.auction.pickup_address.building_number}, {this.state.auction.pickup_address.street}, {this.state.auction.pickup_address.area}</p>
				<p>Drop off Address:</p>
				<p>apartment #{this.state.auction.drop_off_address.apartment_number}, building #{this.state.auction.drop_off_address.building_number}, {this.state.auction.drop_off_address.street}, {this.state.auction.drop_off_address.area}</p>
				<p>Billing Address: {this.state.auction.billing_address === 1?
				"pickup address" : this.state.auction.billing_address === 2?
				"drop off address"} </p>
			</div>
			<div>
				<p>Last bid price: {this.state.last_bid}</p>
				{/* handle no bids */}
				<form onSubmit={e.preventDefault(); this.props.createBid(this.state.new_bid)}>
					<label htmlFor="new_bid">Offer a lower bid</label>
					<input id="new_bid" step="any" min={this.state.last_bid + 1} type="number" name="new_bid" onChange={this._handleChange}/>
					{/* step? */}
					<button>Submit</button>
				</form>
			</div>
		</div>
	  )
	}
}