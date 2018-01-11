import React, {Component} from 'react'
import './style.css';
import Axios from 'axios';
import {getClientAddressesApi} from '../../apiConfig';

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
  }

  _handleChange(e){
    this.setState({...this.state, [e.target.name]:e.target.value})
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

    return(
      <div>
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
          </div>
          <div >
            <label htmlFor="weight">Weight in Kg.</label>
            <input id="weight" step="any" min="0.1" type="number" name="weight" onChange={this._handleChange}/>
          </div>
          <div >
            <label>Dimensions</label>
            <input id="length" type="number" step="any" min="0.01" placeholder="length" name="length" onChange = {this._handleDimensions}/>
            <input id="width" type="number" step="any" min="0.01" placeholder="width" name="width" onChange = {this._handleDimensions}/>
            <input id="height" type="number" step="any" min="0.01" placeholder="height" name="height" onChange = {this._handleDimensions}/>
            inches
          </div>
          <div >
            <label htmlFor="delivery_date">Delivery Date</label>
            <input id="delivery_date" type="date" name="delivery_date" onChange={this._handleChange}/>
          </div>
          <div >
            <p>Billing Address</p>
            <label htmlFor="pickup">pick up</label>
            <input id="pickup" type="radio" name="billing_address" value="1" onChange={this._handleChange} required/>
            <label htmlFor="dropoff">drop off</label>
            <input id="billing_address" type="radio" name="billing_address" value="2" onChange={this._handleChange} required/>
          </div>
          <div id="bid_deadline">
            <label>bid deadline</label>
            <input type="date" name="bid_deadline" onChange = {this._handleChange}/>
          </div>
          <h3>Pickup Address</h3>
          <button type="button" onClick={()=>{this._newAddressHandle(document.getElementById("create-pickup"), document.getElementById("pickup-drop-menu"))}}>Enter new address</button>
          <button type="button" onClick={()=>{this._getAddressHandle(document.getElementById("pickup-drop-menu"), document.getElementById("create-pickup"))}}>choose from saved address</button>
          <div id="pickup-drop-menu">
            { this.state.addresses.length === 0?
            <p>You don't have any saved addresses</p>
            :<select name="pickup_address_id" onChange={this._handleChange}>
              <option></option>
              {
                this.state.addresses.map(function(item){
                  return <option key={item.id} value={item.id}>{item.building_number} - {item.street} St. - {item.area}</option>
                })
              }

            </select>
            }
          </div>
          <div id="create-pickup">
            <div>
              <label htmlFor="apartment_number">Apartment number</label>
              <input id="apartment_number" type="number" name="apartment_number" onChange={this._handlePickup}/>
            </div>
            <div>
              <label htmlFor="building_number">Building number</label>
              <input id="building_number" type="number" name="building_number" onChange={this._handlePickup}/>
            </div>
            <div>
              <label htmlFor="street">Street</label>
              <input id="street" type="text" name="street" onChange={this._handlePickup}/>
            </div>
            <div>
            <label htmlFor="pickup-area">Area</label>
              <select id="pickup-area" name="area" onChange={this._handlePickup}>
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
              <p>Do you want to save this address</p>
              <label htmlFor="pickup-saved-true">Yes</label>
              <input id="pickup-saved-true" type="radio" name="saved" value="true" onChange={this._handlePickup} />
              <label htmlFor="pickup-saved-false">No</label>
              <input id="pickup-saved-false" type="radio" name="saved" value="false" onChange={this._handlePickup} />
            </div>
          </div>
          <h3>dropoff Address</h3>
          <button type="button" onClick={()=>{this._newAddressHandle(document.getElementById("create-dropoff"), document.getElementById("dropoff-drop-menu"))}}>Enter new address</button>
          <button type="button" onClick={()=>{this._getAddressHandle(document.getElementById("dropoff-drop-menu"), document.getElementById("create-dropoff"))}}>choose from saved address</button>
          <div id="dropoff-drop-menu">
            { this.state.addresses.length === 0?
            <p>You don't have any saved addresses</p>
            :<select name="drop_off_address_id" onChange={this._handleChange}>
              <option></option>
              {
                this.state.addresses.map(function(item){
                  return <option key={item.id} value={item.id}>{item.building_number} - {item.street} St. - {item.area}</option>
                })
              }
            </select>
          }
          </div>
          <div id="create-dropoff">
            <div>
              <label htmlFor="apartment_number">Apartment number</label>
              <input id="apartment_number" type="number" name="apartment_number" onChange={this._handleDropoff}/>
            </div>
            <div>
              <label htmlFor="building_number">Building number</label>
              <input id="building_number" type="number" name="building_number" onChange={this._handleDropoff}/>
            </div>
            <div>
              <label htmlFor="street">Street</label>
              <input id="street" type="text" name="street" onChange={this._handleDropoff}/>
            </div>
            <div>
              <label htmlFor="dropoff-area">Area</label>
              <select id="dropoff-area" name="area" onChange={this._handleDropoff}>
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
              <p>Do you want to save this address</p>
              <label htmlFor="dropoff-saved-true">Yes</label>
              <input id="dropoff-saved-true" type="radio" name="dropoff-saved" value="true" onChange={this._handleDropoffSaved} />
              <label htmlFor="dropoff-saved-false">No</label>
              <input id="dropoff-saved-false" type="radio" name="dropoff-saved" value="false" onChange={this._handleDropoffSaved} />
            </div>
          </div>

          <p>
            <button>Submit</button>
          </p>
        </form>
      </div>
    )
  }
}
