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
    // if (localStorage.clientAuth == "true") {
    //   let cable = Cable.createConsumer(`ws://localhost:3000/cable?token=${localStorage.jwtToken}`);
    //   this.chats = cable.subscriptions.create({
    //     channel: 'NotificationsChannel'
    //   }, {
    //     connected: () => {},
    //     received: (data) => {
    //       console.log(data);
    //       this.setState({...this.state, notifications:[{body:data.notification.body, check:data.notification.check, id:data.notification.id, order_id:data.order_id}, ...this.state.notifications], message:{notification:data.notification, order_id:data.order_id}});
    //       setTimeout(()=>{
    //         this.setState({...this.state, message:""})
    //       },9000)
    //     }
    //   });
    // }
      let cable = Cable.createConsumer(`ws://localhost:3000/cable?token=${localStorage.jwtToken}`);
      this.chats = cable.subscriptions.create({
        channel: 'CourierNotificationsChannel'
      }, {
        connected: () => {},
        received: (data) => {
          console.log(data);
          var x = {body:data.notification.body, check:data.notification.check, id:data.notification.id}
          if (data.hasOwnProperty('order_id')) {
            x['order_id']=data.order_id
          }else{
            x['delivery_id']=data.delivery_id
          }
          var k = Object.entries(x)[Object.entries(x).length - 1];
          this.setState({...this.state,
            notifications:[x,...this.state.notifications],
            message:{notification:data.notification, [k[0]]:k[1]}});
         // setTimeout(()=>{
         //   this.setState({...this.state, message:""})
         //  },9000)

        }
      });


  }

  componentWillMount(){
    if (localStorage.courierAuth == "true") {
      this.createSocket()
    }
    Axios.get('http://localhost:3000/courier/notifications').then((response)=>{

      this.setState({...this.state, notifications:response.data})
    })
  }


  _check(e, id, check){
    if(!check) {
      Axios.patch("http://localhost:3000/courier/notification/check",{id:id}).then((response)=>{
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
                if (notification.hasOwnProperty('order_id')) {
                  return(
                    <Menu.Item key={notification.id}>
                      <a onClick={(e) => this._check(e, notification.id, notification.check)} className="checked notification-style" href={`http://localhost:3001/courier/auctiondetails/${notification.order_id}`}>{notification.body}</a>
                    </Menu.Item>
                  )
                }else{
                return(
                  <Menu.Item key={notification.id}>
                    <a onClick={(e) => this._check(e, notification.id, notification.check)} className="checked notification-style" href={`http://localhost:3001/courier/deliveries/${notification.delivery_id}`}>{notification.body}</a>
                  </Menu.Item>
                )
                }
              }else{
                if (notification.hasOwnProperty('order_id')) {
                  return(
                    <Menu.Item key={notification.id}>
                      <a onClick={(e) => this._check(e, notification.id, notification.check)} className="notification-style" href={`http://localhost:3001/courier/auctiondetails/${notification.order_id}`}>{notification.body}</a>
                    </Menu.Item>
                  )
                }else{
                  return(
                    <Menu.Item key={notification.id}>
                      <a onClick={(e) => this._check(e, notification.id, notification.check)} className="notification-style" href={`http://localhost:3001/courier/deliveries/${notification.delivery_id}`}>{notification.body}</a>
                    </Menu.Item>
                  )
                }
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

// <a href={`http://localhost:3001/client/orderdetails/${this.state.message.auction_id}`}>

// <Menu.Item key="0">
//   <a href="http://www.alipay.com/">1st menu item</a>
// </Menu.Item>
