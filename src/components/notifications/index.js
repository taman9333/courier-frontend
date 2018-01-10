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
          this.setState({...this.state, notifications:[...this.state.notifications, data.notification], message:data.notification});
          setTimeout(()=>{
            this.setState({...this.state, message:""})
          },8000)
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

      this.setState({...this.state, notifications:response.data.notifications})
    })
  }


  _check(e, id, check){
    if(!check) {
      Axios.patch("http://localhost:3000/client/notification/check",{id:id}).then((response)=>{
        this.setState({...this.state, notifications:response.data.notifications})
      })
    }
  }

  render() {
    const {notifications} = this.state
    return(
      <Dropdown overlay={
        <Menu>
          {
            notifications.length ==0?
            null
            :notifications.map((notification)=>{
              if (notification.check) {
                return(
                  <Menu.Item key={notification.id}>
                    <a onClick={(e) => this._check(e, notification.id, notification.check)} className="checked" href={`http://localhost:3001/client/orderdetails/${notification.auction_id}`}>{notification.body}</a>
                  </Menu.Item>
              )
              }else{
              return(
                <Menu.Item key={notification.id}>
                  <a onClick={(e) => this._check(e, notification.id)}  href={`http://localhost:3001/client/orderdetails/${notification.auction_id}`}>{notification.body}</a>
                </Menu.Item>
              )
            }
            })
          }
        </Menu>
      } trigger={['click']}>
        <a className="ant-dropdown-link" href={`http://localhost:3001/client/orderdetails/${this.state.message.auction_id}`}>
          {Object.keys(this.state.message).length == 0?
                null
                :<p className="show-hide">{this.state.message.body}</p>
              }
        <i className="fa fa-flag" aria-hidden="true"><span>{notifications.length}</span></i>
          </a>
      </Dropdown>
    )
  }

}


// <Menu.Item key="0">
//   <a href="http://www.alipay.com/">1st menu item</a>
// </Menu.Item>
