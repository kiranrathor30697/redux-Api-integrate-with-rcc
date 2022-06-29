import { GETUSERDATA, LOGIN, LOGOUT, REGISTER } from "../constants/constants"

export const loginActionCreator = (login_data) =>{
    return {
        type:LOGIN,
        payload:login_data
    }
}

export const registerActionCreator = (reg_data) =>{
    return {
        type:REGISTER,
        payload:reg_data
    }
}

export const getUserActionCreator = (get_user) => {
    return{
        type:GETUSERDATA,
        payload:get_user
    }
}

export const logoutActionCreator = () =>{
    return {
        type:LOGOUT
    }
}