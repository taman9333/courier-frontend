import Axios from 'axios'
import {filteredOpenAuctionsApi} from '../apiConfig.js'


export const GET_OPEN_AUCTIONS_LOADING = 'GET_OPEN_AUCTIONS_LOADING';
export const GET_OPEN_AUCTIONS = 'GET_OPEN_AUCTIONS';
export const GET_OPEN_AUCTIONS_SUCCESS = 'GET_OPEN_AUCTIONS_SUCCESS';

export const GET_AUCTION_LOADING = "GET_AUCTION_LOADING";
export const GET_AUCTION = "GET_AUCTION";
export const GET_AUCTION_SUCCESS = "GET_AUCTION_SUCCESS";



export const getOpenAuctionsLoading = () => {
	return{
	  type:GET_OPEN_AUCTIONS_LOADING
	}
}


export const getOpenAuctions = () => {
	// const payload = Axios.get(filteredOpenAuctionsApi);
	return{
		type:GET_OPEN_AUCTIONS,
		payload
	}
}

export const getOpenAuctionsSuccess = (response) => {
	return{
		type:GET_OPEN_AUCTIONS_SUCCESS,
		filtered_open_auctions:response.payload.data.filtered_open_auctions
	}
}


export const getAuctionLoading = () => {
	return{
	  type:GET_AUCTION_LOADING
	}
}

export const getAuction = () => {
	return{
		type:GET_AUCTION,
		payload
	}
}

export const getAuctionSuccess = (response) => {
	return{
		type:GET_AUCTION_SUCCESS,
		auction: response.payload.data.auction
	}
}