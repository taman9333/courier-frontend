import React, {Component} from 'react';
import Cable from 'actioncable';
import './style.css'
import { Menu, Dropdown, Icon } from 'antd';
import 'antd/dist/antd.css';
import Axios from 'axios'
import {actionCableApi, mainClientApi, frontUrl} from '../../apiConfig'
import {Link} from 'react-router-dom';


export default class Notifications extends Component{


  constructor(props){
    super(props);
    this.state = {
      notifications:[],
      message:{}
    }
  }

  createSocket() {
    if (localStorage.clientAuth == "true") {
      let cable = Cable.createConsumer(`${actionCableApi}/cable?token=${localStorage.jwtToken}`);
      this.chats = cable.subscriptions.create({
        channel: 'NotificationsChannel'
      }, {
        connected: () => {},
        received: (data) => {
          console.log(data);
          this.setState({...this.state, notifications:[{body:data.notification.body, check:data.notification.check, id:data.notification.id, order_id:data.order_id}, ...this.state.notifications], message:{notification:data.notification, order_id:data.order_id}});
          setTimeout(()=>{
            this.setState({...this.state, message:""})
          },9000)
        }
      });
    }
    else if (localStorage.courierAuth == "true") {
      let cable = Cable.createConsumer(`${actionCableApi}/cable?token=${localStorage.jwtToken}`);
      this.chats = cable.subscriptions.create({
        channel: 'CourierNotificationsChannel'
      }, {
        connected: () => {},
        received: (data) => {
          console.log(data);

        }
      });
    }

  }

  componentWillMount(){
    if (localStorage.courierAuth == "true" || localStorage.clientAuth == "true") {
      this.createSocket()
    }
    Axios.get(`${mainClientApi}/notifications`).then((response)=>{

      this.setState({...this.state, notifications:response.data})
    })
  }


  _check(e, id, check){
    e.preventDefault();
    if(!check) {
      Axios.patch(`${mainClientApi}/notification/check`,{id:id}).then((response)=>{
        this.setState({...this.state, notifications:response.data})
      })
    }
  }

  render() {
    const {notifications} = this.state
    var notCheck = 0
    return(
      <Dropdown overlay={
        <Menu>
          {
            notifications.length ==0?
            null
            :notifications.map((notification)=>{
              if (!notification.check) {
                {notCheck += 1}
                return(
                  <Menu.Item key={notification.id}>
                    // <a onClick={(e) => this._check(e, notification.id, notification.check)} className="checked notification-style" href={`${frontUrl}/client/orderdetails/${notification.order_id}`}>{notification.body}</a>
                    <Link onClick={(e) => this._check(e, notification.id, notification.check)} to={`/client/orderdetails/${notification.order_id}`} className="checked notification-style">{notification.body}</Link>
                  </Menu.Item>
              )
              }else{
              return(
                <Menu.Item key={notification.id}>
                  // <a onClick={(e) => this._check(e, notification.id, notification.check)} className="notification-style" href={`${frontUrl}/client/orderdetails/${notification.order_id}`}>{notification.body}</a>
                  <Link onClick={(e) => this._check(e, notification.id, notification.check)} to={`/client/orderdetails/${notification.order_id}`} className="notification-style">{notification.body}</Link>
                </Menu.Item>
              )
            }
            })
          }
        </Menu>
      } trigger={['click']}>
        <a className="ant-dropdown-link" href="#">
          { Object.keys(this.state.message).length == 0?
            null
            :<p className="show-hide"><i className="fa fa-exclamation" aria-hidden="true"></i>{this.state.message.notification.body}</p>
          }
        <i className="fa fa-flag" aria-hidden="true"><span>{notCheck}</span></i>
        </a>
      </Dropdown>
    )
  }

}

//

// <Menu.Item key="0">
//   <a href="http://www.alipay.com/">1st menu item</a>
// </Menu.Item>
