import { LOGIN, LOGOUT, REGISTER } from "../constants/constants"

export const loginActionCreator = (login_data) =>{
    return {
        type:LOGIN,
        payload:login_data
    }
}

export const registerActionCreator = () =>{
    return {
        type:REGISTER
    }
}

export const logoutActionCreator = () =>{
    return {
        type:LOGOUT
    }
}