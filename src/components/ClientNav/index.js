import React, {Component} from 'react';
import history from '../../history';
import {Link, Route} from 'react-router-dom';
import './style.css'
import Notifications from '../notifications'
import { connect } from 'react-redux';

class ClientNav extends Component{

  componentWillMount(){
    if(localStorage.getItem('jwtToken') !== null && Object.keys(this.props.client).length === 0){
      this.props.showClient()
    }
  }

  _logout(e){
    e.preventDefault();
    this.props.logoutClient();
    history.push('/')
  }

  render(){
    if (Object.keys(this.props.client).length > 0) {
    return(
      <div className="client-header">
        <div className="client-header-container">
        <Link to="/">
          <img className="web-logo" src="../../../wassaly-logo3.png" />
          <p>Wassaly</p>
        </Link>
        <div className="float-right">
          <Notifications />
          <p>
            <Link to="/client">
              <img alt="" className="rounded-circle nav-img" src={this.props.client.img.url == null?`../../../default-img.jpeg` : `${this.props.client.img.url}`}/>{this.props.client.username}
            </Link>
          </p>
          {/* <p><Link to="/">home</Link></p> */}
          <button className="btn btn-sm logout-button" onClick={this._logout.bind(this)}>Logout</button>
        </div>
      <br/>
      </div>
      </div>
    )
    }else{
      return(<div>loading</div>)
    }
  }
}

const mapStateToProps = (state) => {
    return {
        client: state.client.client,
        loading:state.client.loading,
	      error:state.client.error
    }
}

export default connect(mapStateToProps)(ClientNav);

// <Link to={{pathname:`/client/createorder`, query:this.props.client}}>Create Order</Link>
