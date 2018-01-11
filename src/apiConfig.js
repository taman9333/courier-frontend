
export const rootApi = `http://localhost:3000`;

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
