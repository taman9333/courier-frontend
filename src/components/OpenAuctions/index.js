import React, { Component } from 'react';
import Axios from 'axios';
// import './style.css'
import { Link } from 'react-router-dom';
import {filteredOpenAuctionsApi} from '../../apiConfig';

export default class OpenAuctions extends Component{
	constructor(props){
		super(props);
		this.state={
			filtered_open_auctions:[],
			category:"",
			weight: null,
			pickup_area:"",
			drop_off_area:""
		},
		this._handleChange = this._handleChange.bind(this),
		this._handleSubmit = this._handleSubmit.bind(this)
	}


  _handleChange(e){
    this.setState({...this.state, [e.target.name]: e.target.value })
	}

  _handleSubmit(e){
	e.preventDefault();
	Axios.post(filteredOpenAuctionsApi, this.state).then((response)=>{
		this.setState({...this.state, filtered_open_auctions: response.payload.data.filtered_open_auctions })
	})
  }
  

	

	render(){
	  return(
			<div>
				<div>
					<form onSubmit={this._handleSubmit}>
						<p>Filter by:</p>
						<div>
							<label htmlFor="category">Category</label>
							<select id="category" name="category" onChange={this._handleChange}>
								<option></option>
								<option value="electronics">electronics</option>
								<option value="food">food</option>
								<option value="beauty">beauty</option>
								<option value="clothing">clothing</option>
								<option value="automotive">automotive</option>
								<option value="outdoors">outdoors</option>
							</select>
							<div >
								<label htmlFor="weight">Weight in Kg.</label>
								<input id="weight" step="any" min="0.1" type="number" name="weight" onChange={this._handleChange}/>
							</div>
							<div>
							<label htmlFor="pickup_area">Pickup_area</label>
								<select id="pickup_area" name="pickup_area" onChange={this._handleChange}>
									<option></option>
									<option value="abbasiya">Abbasiya</option>
									<option value="agouza">Agouza</option>
									<option value="ainShams">Ain Shams</option>
									<option value="dokki">Dokki</option>
									<option value="downtown">Downtown</option>
									<option value="ghamra">Ghamra</option>
									<option value="haram">Haram</option>
									<option value="hdayekElKobba">Hdayek El Kobba</option>
									<option value="heliopolis">Heliopolis</option>
									<option value="helwan">Helwan</option>
									<option value="katameya">Katameya</option>
									<option value="maadi">Maadi</option>
									<option value="manial">Manial</option>
									<option value="mohandseen">Mohandseen</option>
									<option value="mokatam">Mokatam</option>
									<option value="nasrCity">Nasr City</option>
									<option value="rehab">Rehab</option>
									<option value="shobra">Shobra</option>
									<option value="shorouk">Shorouk</option>
									<option value="tagammoaElKhames">Tagammoa El Khames</option>
									<option value="zamalek">Zamalek</option>
								</select>
							</div>
							<div>
							<label htmlFor="drop_off_area">Drop_off_area</label>
								<select id="drop_off_area" name="drop_off_area" onChange={this._handleChange}>
									<option></option>
									<option value="abbasiya">Abbasiya</option>
									<option value="agouza">Agouza</option>
									<option value="ainShams">Ain Shams</option>
									<option value="dokki">Dokki</option>
									<option value="downtown">Downtown</option>
									<option value="ghamra">Ghamra</option>
									<option value="haram">Haram</option>
									<option value="hdayekElKobba">Hdayek El Kobba</option>
									<option value="heliopolis">Heliopolis</option>
									<option value="helwan">Helwan</option>
									<option value="katameya">Katameya</option>
									<option value="maadi">Maadi</option>
									<option value="manial">Manial</option>
									<option value="mohandseen">Mohandseen</option>
									<option value="mokatam">Mokatam</option>
									<option value="nasrCity">Nasr City</option>
									<option value="rehab">Rehab</option>
									<option value="shobra">Shobra</option>
									<option value="shorouk">Shorouk</option>
									<option value="tagammoaElKhames">Tagammoa El Khames</option>
									<option value="zamalek">Zamalek</option>
								</select>
							</div>
							<div >
								<label htmlFor="weight">Weight in Kg.</label>
								<input id="weight" step="any" min="0.1" type="number" name="weight" onChange={this._handleChange}/>
							</div>
          	</div>
						<button>Filter</button>
					</form>
				</div>
				<div>
					{
						this.state.filtered_open_auctions.map(function(item){
							return ( 
								<div class="open_auction">
								{/* did we send the bid deadline in the backend */}
									<p>Category: {item.category}, Bid Deadline: {item.auction.bid_deadline}, Delivery Date: {item.delivery_date} </p>
									<Link to="/courier/auction">show details</Link>
								</div>
							)
						})
					}
				</div>
			</div>
	  )
	}
}
