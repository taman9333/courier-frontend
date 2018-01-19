
export const rootApi = process.env.NODE_ENV === 'production' ? `https://wassaly-backend.herokuapp.com` : `http://localhost:3000`;
export const actionCableApi = process.env.NODE_ENV === 'production' ? `wss://wassaly-backend.herokuapp.com` : `ws://localhost:3000`;

export const frontUrl = process.env.NODE_ENV === 'production' ? `https://wassaly.herokuapp.com` : `http://localhost:3001`;

export const courierApi = `${rootApi}/courier`;
// `http://localhost:3000/clients/${id}`

// // Courier_Profile
export const courierProfileApi = `${courierApi}/profile`;
export const  updateCourierProfileApi = `${courierApi}/update_profile`;
export const  resetCourierPasswordApi = `${courierApi}/reset_password`;

// Courier_Registrations
export const courierRegistrationsApi = `${courierApi}/register`;

// Courier_Sessions
export const courierSessionsApi = `${courierApi}/login`;



// open_auctions
// export const filteredOpenAuctionsApi = `${rootApi}/courer/filtered_open_auctoins`;
// maybe we should edit this to get the index from orders controller instead of auctions

// export const  auctionApi = `${rootApi}/courier/auction`;
// clients

export const newClientApi = `${rootApi}/clients_registrations`

export const loginClientApi = `${rootApi}/client/sessions`


//orders

export const createOrderApi = `${rootApi}/clients/orders`

// get client addresses

export const getClientAddressesApi = `${rootApi}/client/addresses`

// courier deliveries

export const getCourierDeliveriesApi = `${rootApi}/courier/deliveries/index`

export const getClientDeliveriesApi = `${rootApi}/clients/deliveries`

///////////////////////////////////////////

export const clientDeliveryDetails = `${rootApi}/clients/deliveries`

export const courierDeliveries = `${rootApi}/courier/deliveries`

export const mainCourierApi = `${rootApi}/courier`

export const mainClientApi = `${rootApi}/client`

export const  updateClientProfileApi = `${rootApi}/client/update_profile`;