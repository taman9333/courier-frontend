import Axios from 'axios'
import {openAuctionsApi} from '../apiConfig.js'


export const GET_OPEN_AUCTIONS_LOADING = 'GET_OPEN_AUCTIONS_LOADING';
export const GET_OPEN_AUCTIONS = 'GET_OPEN_AUCTIONS';
export const GET_OPEN_AUCTIONS_SUCCESS = 'GET_OPEN_AUCTIONS_SUCCESS';
// export const GET_OPEN_AUCTIONS_FAILURE = 'GET_OPEN_AUCTIONS_FAILURE';



export const getOpenAuctionsLoading = () => {
	return{
	  type:GET_OPEN_AUCTIONS_LOADING
	}
}


export const getOpenAuctions = () => {
	const payload = Axios.get(openAuctionsApi);
	return{
		type:GET_OPEN_AUCTIONS,
		payload
	}
}

export const getOpenAuctionsSuccess = (response) => {
	return{
		type:GET_OPEN_AUCTIONS_SUCCESS,
		open_auctions:response.payload.data.open_auctions
	}
}


// export const getOpenAuctionsFailure = () => {
// 	return{
// 	  type:GET_OPEN_AUCTIONS_FAILURE,
// 	  error:error.payload.response.data.errors
// 	}
// }
  