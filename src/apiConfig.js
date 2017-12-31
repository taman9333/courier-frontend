export const rootApi = `http://localhost:3000`

// clients

export const newClientApi = `${rootApi}/clients_registrations`

export const loginClientApi = `${rootApi}/client/sessions`


//orders

export const createOrderApi = (id)=>{return`${rootApi}/clients/${id}/orders`}

// get client addresses

export const getClientAddressesApi = `${rootApi}/client/addresses`
