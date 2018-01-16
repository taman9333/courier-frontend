import React, {Component} from 'react'
import './style.css'

export default class HomePageNav extends Component{


  render(){
    return(
      <div className="home-container">
        <div className="home-page-nav">
          <img className="web-logo" src="../../../wassaly-logo3.png" />
          <ul className="nav home-nav-float">
            <li className="nav-item">
              <a className="nav-link active" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Mission</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Vision</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }

}
