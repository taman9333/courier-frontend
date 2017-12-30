import React, {Component} from 'react';
import {connect} from 'react-redux'
import history from '../history'

export default function(ComposedComponent){
  class Authenticate extends Component{
    componentWillMount(){
      if(localStorage.getItem('jwtToken') === null){
        history.push('/')
      }
    }

    render(){
      return(
        <ComposedComponent {...this.props}/>
      )
    }
  }

  // function mapStateToProps(state){
  //   return{
  //     isAuthenticated:state.client.isAuthenticated
  //   }
  // }

  // return connect(mapStateToProps)(Authenticate);
  return Authenticate;
}
