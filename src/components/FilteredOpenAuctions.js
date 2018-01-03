import React, { Component } from 'react';
// import './style.css'
import { Link } from 'react-router-dom';

export default class CourierAuctionDetails extends Component{
	render(){
	  return(
		<div>
            {
                this.state.filtered_open_auctions.map(function(item){
                    return <div class="Auction-Card"><p>Category: {item.category}, Bid Deadline: {item.auction.bid_deadline}, Delivery Date: {item.delivery_date} </p></div>
                })
            }
		</div>
	  )
	}
}