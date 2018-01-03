import {
	GET_OPEN_AUCTIONS_LOADING, GET_OPEN_AUCTIONS_SUCCESS, GET_AUCTION_LOADING, GET_AUCTION_SUCCESS
} from '../actions/AuctionsActions';

const INITIAL_STATE = {
	filtered_open_auctions: [],
	auction: {},
    loading: false
}

export default function(currentState = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_OPEN_AUCTIONS_LOADING:
			return {...currentState, loading: true};
			// break;
        case GET_OPEN_AUCTIONS_SUCCESS:
            return {...currentState, filtered_open_auctions:action.filtered_open_auctions, loading: false};
			// break;
		case GET_AUCTION_LOADING:
			return {...currentState, loading: true};
			// break;
		case GET_AUCTION_SUCCESS:
			return {...currentState, auction:action.auction, loading: false};
			// break;
		default:
			return currentState;
	}
}



   
