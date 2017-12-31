export const rootApi = `http://localhost:3000`;

// // Courier_Profile
export const courierApi = (id) => `${rootApi}/courier?id.value=${id}`;

// Courier_Registrations
export const courierRegistrationsApi = `${rootApi}/courier/register`;

// Courier_Sessions
export const courierSessionsApi = `${rootApi}/courier/login`;


// patch 'update_profile', to: 'profile#update'


