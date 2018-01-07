
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
export const openAuctionsApi = `${courierApi}/open_auction`;


// clients

export const newClientApi = `${rootApi}/clients_registrations`

export const loginClientApi = `${rootApi}/client/sessions`


//orders

export const createOrderApi = `${rootApi}/clients/orders`

// get client addresses

export const getClientAddressesApi = `${rootApi}/client/addresses`

// courier deliveries

export const getCourierDeliveriesApi = `${rootApi}/courier/deliveries/index`
