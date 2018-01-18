import React, {Component} from 'react'
import UserRegister from '../../containers/ClientRegisterContainer'
import './style.css'
import HomePageNav from '../../components/home_page_nav'
import ClientNav from '../../containers/ClientNavContainer'
import CourierNav from '../../containers/CourierHeaderContainer'

export default class HomePage extends Component{


  render(){
    return(
      <div className="home-page">
        {
          localStorage.clientAuth === "true"?
          <ClientNav />
          :localStorage.courierAuth === "true"?
          <CourierNav />
          :<HomePageNav query={this.props.location.query} />
        }
        <div className="home-img-container">
          <img className="home-img" src="../../../img2.jpg" />
        </div>
        <div className="img-info">
          <h2>SIT BACK AND RELAX WHILE YOUR ITEM IS SAFELY DELIVERED</h2>
          <h3>PICK YOUR COURIER AND PRICE</h3>
        </div>
      </div>
    )
  }
}


// <div className="main-page-container">
//   <h2>About</h2>
//   <p>Wassaly offers you shipping marketplace that helps you connect with trusted couriers of all kinds from large to small companies. We make organizing a delivery fast and easy.</p>
//   <p>People use Wassaly because it's safe and affordable to price and ship you stuff, We offer our customers the chance to save money, reduce strees and provide trusted transport.</p>
//   <h2>Mission</h2>
//   <p>We build a community of trusted couries to serve our customers by giving them the best service with the lowest possible prices for their shipments.</p>
//   <p>We strive to make your experience as easy and free of stress as possible, just sit back and relax while your item is safely delivered by your chosen transport provider.</p>
// </div>
