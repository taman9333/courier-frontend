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
      <div className="client-delivery-details-container jumbotron">
        <h1>Delivery Details</h1>
        <div>
        <OrderDetails order={order} pickup={pickup} drop_off={drop_off} />
        </div>
        <hr className="my-4" />
        <div className="rating-review">
          <h4>Delivery info</h4>
          <p><span className="key-width">status</span>{delivery.status === "waiting_pickup"?"Waiting Pickup":delivery.status}</p>
          <p><span className="key-width">Courier</span>{courier}</p>
          <p><span className="key-width">Price</span>${price}</p>
          {delivery.rating != null?
          <div className="view-review">
            <h5>Rating</h5>
            <StarRatingComponent
                className="star-rating"
                name="final"
                starCount={5}
                value={rating}
                editing={false}

            />
          <h5>Review</h5>
          <p>{delivery.review == ""? "ـــــــــــــــــــــــــــــــــــــــــــــــــــ":delivery.review}</p>
          </div>
          :<div className="set-review">
              <form onSubmit={this._handleSubmit}>
                <div className="form-group">
                 <h5>Rating from : {rating}</h5>
                 <div className="star-rating">
                   <StarRatingComponent
                       name="rate1"
                       starCount={5}
                       value={rating}
                       onStarClick={this.onStarClick.bind(this)}
                   />
                 </div>
                 <textarea className="form-control review-text-area" rows="4" name="review"></textarea>
                 </div>
                 <button className="btn btn-success">Submit</button>
               </form>
           </div>
           }
        </div>

      </div>
    )
  }
}
