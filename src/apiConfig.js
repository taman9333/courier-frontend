
export const rootApi = `http://localhost:3000`;

export const courierApi = `${rootApi}/courier`;
// `http://localhost:3000/clients/${id}`

// // Courier_Profile
export const courierProfileApi = `${rootApi}/courier/profile`;

// Courier_Registrations
export const courierRegistrationsApi = `${rootApi}/courier/register`;

// Courier_Sessions
export const courierSessionsApi = `${rootApi}/courier/login`;


// patch 'update_profile', to: 'profile#update'

// open_auctions
export const openAuctionsApi = `${rootApi}/courier/open_auction`;


// clients

export const newClientApi = `${rootApi}/clients_registrations`

export const loginClientApi = `${rootApi}/client/sessions`


//orders

export const createOrderApi = (id)=>{return`${rootApi}/clients/orders`}

// get client addresses

export const getClientAddressesApi = `${rootApi}/client/addresses`

