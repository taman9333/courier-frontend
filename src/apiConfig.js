
export const rootApi = `http://localhost:3000`;

export const courierApi = `${rootApi}/courier`;
// `http://localhost:3000/clients/${id}`

// // Courier_Profile
export const courierProfileApi = `${courierApi}/profile`;

// Courier_Registrations
export const courierRegistrationsApi = `${courierApi}/register`;

// Courier_Sessions
export const courierSessionsApi = `${courierApi}/login`;


// patch 'update_profile', to: 'profile#update'

// open_auctions
export const filteredOpenAuctionsApi = `${rootApi}/filtered_open_auctoins`;
// maybe we should edit this to get the index from orders controller instead of auctions

export const  auctionApi = `${rootApi}/auctoin`;
// clients

export const newClientApi = `${rootApi}/clients_registrations`

export const loginClientApi = `${rootApi}/client/sessions`


//orders

export const createOrderApi = (id)=>{return`${rootApi}/clients/orders`}

// get client addresses

export const getClientAddressesApi = `${rootApi}/client/addresses`

