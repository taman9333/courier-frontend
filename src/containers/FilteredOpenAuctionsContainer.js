import {connect} from 'react-redux';
import FilteredOpenAuctions from '../components/FilteredOpenAuctions';
import {getOpenAuctionsLoading, getOpenAuctions, getOpenAuctionsSuccess} from '../actions/AuctionsActions';
import Axios from 'axios';
import { filteredOpenAuctionsApi } from '../apiConfig';

const mapStateToProps = function(state){
    return{
        filtered_open_auctions:state.Auctions.filtered_open_auctions,
        loading:state.Auctions.loading
    }
  }
  
const mapDispatchToProps = function(dispatch){
    return{
        getOpenAuctions:function(){
            dispatch(getOpenAuctionsLoading());
            Axios.get(filteredOpenAuctionsApi).then(response => {
                dispatch(getOpenAuctionsSuccess(response))
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(FilteredOpenAuctions)
  