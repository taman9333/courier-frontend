import React, {Component} from 'react'

export default class CreateOrder extends Component{
  constructor(){
    super();
    this.state={
      client_id:1,
      category:"",
      weight:0,
      dimensions:"",
      delivery_date:"",
      billing_address:""
    }
  }

  render(){
    return(
      <div>
        <form>
        <div>
          <label htmlFor="category">Category</label>
          <select id="category" name="category">
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
            <input id="weight" type="number" name="weight"/>
          </div>
          <div >
            <label htmlFor="dimensions">Dimensions</label>
            <input id="dimensions" type="number" placeholder="length" name="length" />
            <input id="dimensions" type="number" placeholder="width" name="width" />
            <input id="dimensions" type="number" placeholder="height" name="height" />
            inches
          </div>
          <div >
            <label htmlFor="delivery_date">Delivery Date</label>
            <input id="delivery_date" type="date" name="delivery_date"/>
          </div>
          <div >
            <p>Billing Address</p>
            <label htmlFor="pickup">pickup</label>
            <input id="pickup" type="radio" name="billing_address" value="pickup"/>
            <label htmlFor="dropoff">dropoff</label>
            <input id="billing_address" type="radio" name="billing_address" value="dropoff"/>
          </div>
          <div>
            <h3>Pickup Address</h3>
            <div>
              <label htmlFor="apartment_number">Apartment number</label>
              <input id="apartment_number" type="number" name="apartment_number"/>
            </div>
            <div>
              <label htmlFor="building_number">Building number</label>
              <input id="building_number" type="number" name="building_number"/>
            </div>
            <div>
              <label htmlFor="street">Street</label>
              <input id="street" type="text" name="street"/>
            </div>
            <div>
            <label htmlFor="pickup-area">Area</label>
              <select id="pickup-area">
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
          <div>
            <h3>dropoff Address</h3>
            <div>
              <label htmlFor="apartment_number">Apartment number</label>
              <input id="apartment_number" type="number" name="apartment_number"/>
            </div>
            <div>
              <label htmlFor="building_number">Building number</label>
              <input id="building_number" type="number" name="building_number"/>
            </div>
            <div>
              <label htmlFor="street">Street</label>
              <input id="street" type="text" name="street"/>
            </div>
            <div>
            <label htmlFor="dropoff-area">Area</label>
              <select id="dropoff-area">
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


        </form>
      </div>
    )
  }
}


//<p>{Number(this.props.location.pathname.split("/")[2])}</p>
