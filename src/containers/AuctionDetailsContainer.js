import {connect} from 'react-redux';
import AuctionDetails from '../components/CourierAuctionDetails';
import {getAuctionLoading, getAuction, getAuctionSuccess} from '../actions/AuctionsActions';
import Axios from 'axios';
import { auctionApi } from '../apiConfig';

const mapStateToProps = function(state){
    return{
        auction:state.Auctions.auction,
        loading:state.Auctions.loading
    }
  }
  
const mapDispatchToProps = function(dispatch){
    return{
        getAuction:function(){
            dispatch(getAuctionLoading());
            Axios.get(auctionApi).then(response => {
                dispatch(getAuctionSuccess(response))
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(AuctionDetails)
  