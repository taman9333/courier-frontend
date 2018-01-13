import React, {Component} from 'react'
import './style.css';
import Axios from 'axios';
import {getClientAddressesApi} from '../../apiConfig';
import { DatePicker } from 'antd';
import moment from 'moment';

export default class CreateOrder extends Component{
  constructor(props){
    super(props);
    this.state={
      client_id:0,
      category:"",
      weight:0,
      dimensions:"",
      delivery_date:"",
      billing_address:0,
      pickup_address_attributes:{
        apartment_number:0,
        building_number:0,
        street:"",
        area:"",
        saved:false,
        client_id:0
      },
      drop_off_address_attributes:{
        apartment_number:0,
        building_number:0,
        street:"",
        area:"",
        saved:false,
        client_id:0
      },
      addresses:[],
      pickup_address_id:0,
      drop_off_address_id:0,
      bid_deadline:""
    },
    this._handleChange = this._handleChange.bind(this)
    this._handleDimensions = this._handleDimensions.bind(this)
    this._handlePickup = this._handlePickup.bind(this)
    this._handleDropoff = this._handleDropoff.bind(this)
    this._handleOrder = this._handleOrder.bind(this)
    this._handleDropoffSaved = this._handleDropoffSaved.bind(this)
    this._newAddressHandle = this._newAddressHandle.bind(this)
    this._getAddressHandle = this._getAddressHandle.bind(this)
    this._handleDate = this._handleDate.bind(this)
  }

  _handleChange(e){
    this.setState({...this.state, [e.target.name]:e.target.value})
  }

  _handleDate(e, x){
    const date = `${e._d.getUTCFullYear()}/${e._d.getUTCMonth() + 1}/${e._d.getUTCDate()}`
    this.setState({...this.state, [x]:date})
  }

  _handleDimensions(e){
    switch(e.target.name){
      case 'length':
        var y = `${e.target.value}*${document.getElementById('width').value}*${document.getElementById('height').value}`
        this.setState({...this.state, dimensions:y})
        break;
      case 'width':
        var y = `${document.getElementById('length').value}*${e.target.value}*${document.getElementById('height').value}`
        this.setState({...this.state, dimensions:y})
        break;
      case 'height':
        var y = `${document.getElementById('length').value}*${document.getElementById('width').value}*${e.target.value}`
        this.setState({...this.state, dimensions:y})
        break;
    }
  }

  _handlePickup(e){
    this.setState({...this.state, pickup_address_attributes:{...this.state.pickup_address_attributes, [e.target.name]:e.target.value}})
  }

  _handleDropoff(e){
    this.setState({...this.state, drop_off_address_attributes:{...this.state.drop_off_address_attributes, [e.target.name]:e.target.value}})
  }


  _handleDropoffSaved(e){
    this.setState({...this.state, drop_off_address_attributes:{...this.state.drop_off_address_attributes, saved:e.target.value}})
  }

  _newAddressHandle(x, y){
    // var y = document.getElementById("pickup-drop-menu");
    y.style.display="none"
    // var x =document.getElementById("create-pickup")
    if (x.style.display === "block") {
      x.style.display = "none"
    }else{
      x.style.display = "block"
    }
  }

  _getAddressHandle(x, y){
    // var y = document.getElementById("create-pickup");
    y.style.display="none"
    // var x = document.getElementById("pickup-drop-menu");
    if (x.style.display === "block") {
      x.style.display = "none"
    }else{
      x.style.display = "block"
    }
  }

  _handleOrder(e){

    e.preventDefault();
    // const id = Number(this.props.location.pathname.split("/")[2])
    let order = this.state
    let {pickup_address_attributes, drop_off_address_attributes, drop_off_address_id, pickup_address_id, addresses, ...cloneOrder} = order
    if (this.state.pickup_address_id === 0) {
      cloneOrder["pickup_address_attributes"] = this.state.pickup_address_attributes
    }else{
      cloneOrder["pickup_address_id"] = this.state.pickup_address_id
    }
    if (this.state.drop_off_address_id === 0) {
      cloneOrder["drop_off_address_attributes"] = this.state.drop_off_address_attributes
    }else{
      cloneOrder["drop_off_address_id"] = this.state.drop_off_address_id
    }
    const finalOrder = {}
    finalOrder["order"] = cloneOrder
    this.props.createOrder(finalOrder)
  }

  componentWillMount(){
    Axios.get(getClientAddressesApi).then((response)=>{
      const id = response.data.client_id
      this.setState({...this.state, addresses:response.data.addresses, client_id:id, pickup_address_attributes:{...this.state.pickup_address_attributes, client_id:id}, drop_off_address_attributes:{...this.state.drop_off_address_attributes, client_id:id}})
    })
  }



  render(){
    const dateFormat = 'YYYY/MM/DD';
    return(
      <div className="create-order-container jumbotron">
        <h1>Create Order</h1>
        {
          this.props.flashMessage != undefined?
          this.props.flashMessage.constructor.name !== 'Array'?
          null
          :
          <div className="flash-message-error-container">
            {
              this.props.flashMessage.map(function(item, i){
              return <p key={i} className="flash-message-error">&#10005; {item}</p>
            })
          }
          </div>
          :null
        }
        <form onSubmit={this._handleOrder}>
          <div className="form-group" className="border-bottom-all">
            <label htmlFor="category">Category</label>
            <select id="category" name="category" className="form-control" onChange={this._handleChange}>
              <option></option>
              <option value="electronics">electronics</option>
              <option value="food">food</option>
              <option value="beauty">beauty</option>
              <option value="clothing">clothing</option>
              <option value="automotive">automotive</option>
              <option value="outdoors">outdoors</option>
            </select>
          </div>
          <div className="form-group" className="border-bottom-all">
            <label htmlFor="weight">Weight in Kg.</label>
            <input id="weight" step="any" className="form-control" min="0.1" type="number" name="weight" onChange={this._handleChange}/>
          </div>
          <div className="form-group">
            <label>Dimensions in  inches</label>
            <div className="row">
            <div className="col">
              <input id="length" type="number" className="form-control" step="any" min="0.01" placeholder="length" name="length" onChange = {this._handleDimensions}/>
            </div>
            <div className="col">
              <input id="width" type="number" className="form-control" step="any" min="0.01" placeholder="width" name="width" onChange = {this._handleDimensions}/>
            </div>
            <div className="col">
              <input id="height" type="number" className="form-control" step="any" min="0.01" placeholder="height" name="height" onChange = {this._handleDimensions}/>
            </div>
          </div>
        </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label" htmlFor="delivery_date">Delivery Date</label>
            <div>
              <DatePicker className="form-control" onChange={(e)=>{this._handleDate(e, "delivery_date")}} />
            </div>
          </div>
          <div >
            <p>Billing Address</p>
            <input id="pickup" type="radio" name="billing_address" value="1" onChange={this._handleChange} required/>
            <p><label htmlFor="pickup">Pick Up</label></p>
            <input id="dropoff" type="radio" name="billing_address" value="2" onChange={this._handleChange} required/>
            <p><label htmlFor="dropoff">Drop Off</label></p>
          </div>
          <div className="form-group row" id="bid_deadline">
            <label className="col-sm-3 col-form-label">Bid Deadline</label>
            <div >
              <DatePicker className="form-control" onChange={(e)=>{this._handleDate(e, "bid_deadline")}} />
            </div>
          </div>
          <div className="pickup-address">
            <h3>Pickup Address</h3>
            <button type="button" className="btn btn-info" onClick={()=>{this._newAddressHandle(document.getElementById("create-pickup"), document.getElementById("pickup-drop-menu"))}}>Enter new address</button>
            <button type="button" className="btn btn-dark" onClick={()=>{this._getAddressHandle(document.getElementById("pickup-drop-menu"), document.getElementById("create-pickup"))}}>choose from saved address</button>
            <div id="pickup-drop-menu">
              { this.state.addresses.length === 0?
              <p>You don't have any saved addresses</p>
              :
              <div className="form-group">
              <select name="pickup_address_id" className="fetchAddress form-control" onChange={this._handleChange}>
                <option></option>
                {
                  this.state.addresses.map(function(item){
                    return <option key={item.id} value={item.id}>{item.building_number} - {item.street} St. - {item.area}</option>
                  })
                }
              </select>
              </div>
              }
            </div>
            <div id="create-pickup">
              <div className="form-group row">
                <label htmlFor="apartment_number" className="col-sm-3 col-form-label" >Apartment number</label>
                <div className="col-sm-9">
                  <input id="apartment_number" className="form-control" type="number" name="apartment_number" onChange={this._handlePickup}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="building_number" className="col-sm-3 col-form-label">Building number</label>
                <div className="col-sm-9">
                  <input id="building_number" type="number" className="form-control" name="building_number" onChange={this._handlePickup}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="street" className="col-sm-3 col-form-label">Street</label>
                <div className="col-sm-9">
                  <input id="street" type="text" className="form-control" name="street" onChange={this._handlePickup}/>
                </div>
              </div>
              <div className="form-group row">
              <label htmlFor="pickup-area" className="col-sm-3 col-form-label">Area</label>
              <div className="col-sm-9">
                <select id="pickup-area" className="form-control" name="area" onChange={this._handlePickup}>
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
              </div>
              <div >
                <p>Do you want to save this address</p>
                <input id="pickup-saved-true" type="radio" name="saved" value="true" onChange={this._handlePickup} />
                <p><label htmlFor="pickup-saved-true">Yes</label></p>
                <input id="pickup-saved-false" type="radio" name="saved" value="false" onChange={this._handlePickup} />
                <p><label htmlFor="pickup-saved-false">No</label></p>
              </div>
            </div>
          </div>
          <div className="dropoff-address">
            <h3>Dropoff Address</h3>
            <button type="button" className="btn btn-info" onClick={()=>{this._newAddressHandle(document.getElementById("create-dropoff"), document.getElementById("dropoff-drop-menu"))}}>Enter new address</button>
            <button type="button" className="btn btn-dark" onClick={()=>{this._getAddressHandle(document.getElementById("dropoff-drop-menu"), document.getElementById("create-dropoff"))}}>choose from saved address</button>
            <div id="dropoff-drop-menu">
              { this.state.addresses.length === 0?
              <p>You don't have any saved addresses</p>
              :<div className="form-group">
              <select name="drop_off_address_id" className="fetchAddress form-control" onChange={this._handleChange}>
                <option></option>
                {
                  this.state.addresses.map(function(item){
                    return <option key={item.id} value={item.id}>{item.building_number} - {item.street} St. - {item.area}</option>
                  })
                }
              </select>
              </div>
            }
            </div>
            <div id="create-dropoff">
              <div className="form-group row">
                <label htmlFor="apartment_number" className="col-sm-3 col-form-label">Apartment number</label>
                <div className="col-sm-9">
                  <input id="apartment_number" type="number" className="form-control" name="apartment_number" onChange={this._handleDropoff}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="building_number" className="col-sm-3 col-form-label">Building number</label>
                <div className="col-sm-9">
                  <input id="building_number" type="number" className="form-control" name="building_number" onChange={this._handleDropoff}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="street" className="col-sm-3 col-form-label" >Street</label>
                <div className="col-sm-9">
                  <input id="street" type="text" className="form-control" name="street" onChange={this._handleDropoff}/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="dropoff-area" className="col-sm-3 col-form-label">Area</label>
                <div className="col-sm-9">
                  <select id="dropoff-area" name="area" className="form-control" onChange={this._handleDropoff}>
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
              </div>
              <div >
                <p>Do you want to save this address</p>
                <input id="dropoff-saved-true" type="radio" name="dropoff-saved" value="true" onChange={this._handleDropoffSaved} />
                <p><label htmlFor="dropoff-saved-true">Yes</label></p>
                <input id="dropoff-saved-false" type="radio" name="dropoff-saved" value="false" onChange={this._handleDropoffSaved} />
                <p><label htmlFor="dropoff-saved-false">No</label></p>
              </div>
            </div>
          </div>

          <p>
            <button className="btn btn-success">Submit</button>
          </p>
        </form>
      </div>
    )
  }
}
