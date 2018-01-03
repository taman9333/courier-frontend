import React, { Component } from 'react';
// import './style.css'
import { Link } from 'react-router-dom';

export default class FilteredOpenAuctions extends Component{
	
	render(){
	  return(
		<div>
            {
                this.state.auction_cards_details.map(function(item){
                    return <div class="Auction-Card">
											<p>Category: {item.category}, Bid Deadline: {item.auction.bid_deadline}, Delivery Date: {item.delivery_date} </p>
											<Link to="/courier/auction">show details</Link>
										</div>
                })
            }
		</div>
	  )
	}
}