import React, {Component} from 'react';
import Axios from 'axios'
import './style.css'
import {mainCourierApi} from '../../apiConfig'
import {Link} from 'react-router-dom'

export default class OpenAuctions extends Component{

  constructor(props){
    super(props);
    this.state={
      category:"",
      pickup:"",
      weight:"",
      auctions:null
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._getAll = this._getAll.bind(this)
  }

  _handleChange(e){
    this.setState({...this.state, [e.target.name]:e.target.value})
  }

  _handleSubmit(e){
    e.preventDefault();
    const search = {category:this.state.category, pickup:this.state.pickup, weight:this.state.weight}
    Axios.post(`${mainCourierApi}/search`, search).then((response)=>{
      this.setState({...this.state, auctions:response.data})
    })
  }

  _getAll(){
    Axios.get(`${mainCourierApi}/auctions`).then((response)=>{
      this.setState({...this.state, auctions:response.data})
    })
  }

  componentWillMount(){
    Axios.get(`${mainCourierApi}/auctions`).then((response)=>{
      this.setState({...this.state, auctions:response.data})
    })
  }

  render(){
    const {category, pickup, weight, auctions} = this.state
    return(
      <div className="open-auctions-container jumbotron">
        <h1>Open Auctions</h1>
        <form onSubmit={this._handleSubmit}>
          <div className="row">
          <div className="col">
            <select id="pickup-search" className="form-control" name="pickup"  onChange={this._handleChange}>
            <option value="">Area</option>
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
          <div className="col">
            <select id="category" className="form-control" name="category"  onChange={this._handleChange}>
            <option value="">Category</option>
            <option value="electronics">electronics</option>
            <option value="food">food</option>
            <option value="beauty">beauty</option>
            <option value="clothing">clothing</option>
            <option value="automotive">automotive</option>
            <option value="outdoors">outdoors</option>
            </select>
          </div>
          <div className="col">
            <select id="weight" className="form-control" name="weight"  onChange={this._handleChange}>
              <option value="">Weight</option>
              <option value="0-5">0-5</option>
              <option value="5-10">5-10</option>
              <option value="10-20">10-20</option>
              <option value="20-30">20-30</option>
              <option value="30-max">30-max</option>
            </select>
          </div>
          <button className="btn btn-info"><i className="fa fa-filter" aria-hidden="true"></i>Filter</button>
          </div>
        </form>
        <div className="search-button"><button className="btn btn-success" onClick={this._getAll}><i className="fa fa-search" aria-hidden="true"></i>Find All</button></div>
        {
          auctions != null?
          auctions.length == 0?
          <div className="flash-message-failure">No Auctions found</div>
          :auctions.map((auction)=>{
            var x = `${new Date(auction.bid_deadline)}`
            x = x.split(" ").slice(0, 4)
            x = x.join(" ")
            return(
              <div key={auction.id} className="courier-auctions">
                <p><span className="auction-key-width">Category</span>{auction.category}</p>
                <p><span className="auction-key-width">Bid Deadline</span>{x}</p>
                <p><span className="auction-key-width">Area</span>{auction.area}</p>
                <p><span className="auction-key-width">Weight</span>{auction.weight}</p>
                <Link to={`/courier/auctiondetails/${auction.order_id}`}>More Details</Link>
              </div>
            )
          })
          :null
        }

      </div>
    )
  }

}
