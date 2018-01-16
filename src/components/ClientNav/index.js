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
        <i className="fa fa-truck" aria-hidden="true"></i>
        <div className="float-right">
          <Notifications />
          <p>
            <Link to="/client">
              <img alt="" className="rounded-circle nav-img" src={this.props.client.img.url == null?`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcAjO1-yy10xV5ylPfYoPrnpgC8w5TlaUmF9B_BTol5VGia5rp` :`http://localhost:3000/${this.props.client.img.url}`}/>{this.props.client.username}
            </Link>
          </p>
          {/* <p><Link to="/">home</Link></p> */}
          <button className="btn btn-sm btn-primary" onClick={this._logout.bind(this)}>Logout</button>
        </div>
      <br/>
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
