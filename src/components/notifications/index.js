import React, {Component} from 'react';
import Cable from 'actioncable';
import './style.css'
import { Menu, Dropdown, Icon } from 'antd';
import 'antd/dist/antd.css';
import Axios from 'axios'




export default class Notifications extends Component{


  constructor(){
    super();
    this.state = {
      notifications:[],
      message:{}
    }
  }

  createSocket() {
    if (localStorage.clientAuth == "true") {
      let cable = Cable.createConsumer(`ws://localhost:3000/cable?token=${localStorage.jwtToken}`);
      this.chats = cable.subscriptions.create({
        channel: 'NotificationsChannel'
      }, {
        connected: () => {},
        received: (data) => {
          console.log(data);
          this.setState({...this.state, notifications:[{body:data.notification.body, check:data.notification.check, order_id:data.order_id}, ...this.state.notifications], message:{notification:data.notification, order_id:data.order_id}});
          // setTimeout(()=>{
          //   this.setState({...this.state, message:""})
          // },8000)
        }
      });
    }
    else if (localStorage.courierAuth == "true") {
      let cable = Cable.createConsumer(`ws://localhost:3000/cable?token=${localStorage.jwtToken}`);
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
    Axios.get('http://localhost:3000/client/notifications').then((response)=>{

      this.setState({...this.state, notifications:response.data})
    })
  }


  _check(e, id, check){
    if(!check) {
      Axios.patch("http://localhost:3000/client/notification/check",{id:id}).then((response)=>{
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
                    <a onClick={(e) => this._check(e, notification.id, notification.check)} className="checked notification-style" href={`http://localhost:3001/client/orderdetails/${notification.order_id}`}>{notification.body}</a>

                  </Menu.Item>
              )
              }else{
              return(
                <Menu.Item key={notification.id}>
                  <a onClick={(e) => this._check(e, notification.id)} className="notification-style" href={`http://localhost:3001/client/orderdetails/${notification.order_id}`}>{notification.body}</a>
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
            :<p className="show-hide">{this.state.message.notification.body}</p>
          }
        <i className="fa fa-flag" aria-hidden="true"><span>{notCheck}</span></i>
        </a>
      </Dropdown>
    )
  }

}

// <a href={`http://localhost:3001/client/orderdetails/${this.state.message.auction_id}`}>

// <Menu.Item key="0">
//   <a href="http://www.alipay.com/">1st menu item</a>
// </Menu.Item>
