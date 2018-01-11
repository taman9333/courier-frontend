import React, {Component} from 'react';
import Axios from 'axios'
import './style.css'

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
    this._getAll = this._findAll.bind(this)
  }

  _handleChange(e){
    this.setState({...this.state, [e.target.name]:e.target.value})
  }

  _handleSubmit(e){
    const search = {category:this.state.category, pickup:this.state.pickup, weight:this.state.weight}
    
    e.preventDefault();
    Axios.post("http://localhost:3000/courier/search", search).then((response)=>{
      this.setState({...this.state, auctions:response.data})
    })
  }

  _findAll(){
    Axios.get('http://localhost:3000/courier/auctions').then((response)=>{
      this.setState({...this.state, auctions:response.data})
    })
  }

  componentWillMount(){
    Axios.get('http://localhost:3000/courier/auctions').then((response)=>{
      this.setState({...this.state, auctions:response.data})
    })
  }

  render(){
    const {category, pickup, weight, auctions} = this.state
    return(
      <div>
        <form onSubmit={this._handleSubmit}>
          <div>
            <label htmlFor="pickup">Area</label>
            <select id="pickup" name="pickup"  onChange={this._handleChange}>
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
            <label htmlFor="category">Category</label>
            <select id="category" name="category"  onChange={this._handleChange}>
            <option></option>
            <option value="electronics">electronics</option>
            <option value="food">food</option>
            <option value="beauty">beauty</option>
            <option value="clothing">clothing</option>
            <option value="automotive">automotive</option>
            <option value="outdoors">outdoors</option>
            </select>
          </div>
          <div>
            <label htmlFor="weight">Weight</label>
            <select id="weight" name="weight"  onChange={this._handleChange}>
              <option></option>
              <option value="0-5">0-5</option>
              <option value="5-10">5-10</option>
              <option value="10-20">10-20</option>
              <option value="20-30">20-30</option>
              <option value="30-max">30-max</option>
            </select>
          </div>
          <button>Filter</button>
        </form>
        <button onClick={this._getAll}>Find All</button>
        {
          auctions != null?
          auctions.length == 0?
          <p style={{color:"red"}}>No auctions found</p>
          :auctions.map((auction)=>{
            return(
              <div key={auction.id} className="auction-courier">
                <p>{auction.bid_deadline}</p>
                <p>{auction.category}</p>
                <p>{auction.area}</p>
                <a href="/courier/auctiondetails/{auction.id}">More Details</a>
              </div>
            )
          })
          :null
        }

      </div>
    )
  }

}
