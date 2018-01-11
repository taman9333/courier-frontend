import React, {Component} from 'react'
import OrderDetails from '../OrderDetails'
import Axios from 'axios'
import StarRatingComponent from 'react-star-rating-component';
import './style.css'

export default class ClientDeliveriesDetails extends Component{

  constructor(props){
    super(props);
    this.state={
      order:{},
      pickup:{},
      drop_off:{},
      delivery:{},
      courier:"",
      price:null,
      rating: 0
    }
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  componentWillMount(){
    const id = this.props.location.pathname.split("/")[3]
    Axios.get(`http://localhost:3000/clients/deliveries/${id}`).then((response)=>{
      this.setState({...this.state, ...response.data, rating:response.data.delivery.rating})
    })
  }

  onStarClick(nextValue, prevValue, name) {
        this.setState({...this.state, rating: nextValue});
    }

    _handleSubmit(e){
      e.preventDefault();
      const id = this.props.location.pathname.split("/")[3]
      const review = document.querySelector("textarea").value
      Axios.patch(`http://localhost:3000/clients/deliveries/${id}`, {rating:this.state.rating, review:review}).then((response)=>{
        this.setState({...this.state, rating:response.data.delivery.rating, delivery:response.data.delivery})
      })
    }

  render(){
    const {order, pickup, drop_off, delivery, courier, price, rating} = this.state
    return(
      <div>
        <div className="delivery-details">
        <OrderDetails order={order} pickup={pickup} drop_off={drop_off} />
        </div>
        <div className="rating-review">
          <p>status: {delivery.status === "waiting_pickup"?"Waiting Pickup":delivery.status}</p>
          <p>Courier: {courier}</p>
          <p>Price: ${price}</p>
          {delivery.rating != null?
          <div >
            <h3>Rating</h3>
            <StarRatingComponent
                className="star-rating"
                name="final"
                starCount={5}
                value={rating}
                editing={false}

            />
          <h3>Review</h3>
          <p>{delivery.review == ""? "ـــــــــــــــــــــــــــــــــــــــــــــــــــ":delivery.review}</p>
          </div>
          :<div>
              <form onSubmit={this._handleSubmit}>
                 <h2>Rating from : {rating}</h2>
                 <div className="star-rating">
                   <StarRatingComponent
                       name="rate1"
                       starCount={5}
                       value={rating}
                       onStarClick={this.onStarClick.bind(this)}
                   />
                 </div>
                 <textarea rows="5" cols="60" name="review"></textarea>
                 <p><button>Submit</button></p>
               </form>
           </div>
           }
        </div>

      </div>
    )
  }
}
