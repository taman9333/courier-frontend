
export const SHOW_COURIER = 'SHOW_COURIER'
export const UPDATE_COURIER = 'UPDATE_COURIER'
export const COURIER_LOGOUT = 'COURIER_LOGOUT'
export const RESET_PASSWORD = 'RESET_PASSWORD'


export const showCourier = (courier) => {
    return{
        type:SHOW_COURIER,
        courier
    }
}

export const updateCourier = (data) => {
    return{
        type:UPDATE_COURIER,
        username: data.username,
        email: data.email,
        phone: data.phone,
        img:data.img
    }
}


  
export function courierLogout(){
    return{
        type:COURIER_LOGOUT
    }
}
  
  
export function resetPassword(data){
    return{
        type:RESET_PASSWORD,
        old_password: data.old_password,
        new_password: data.new_password,
        new_password_confirmation: data.new_password_confirmation
    }
}
