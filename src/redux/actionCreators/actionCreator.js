import { GETUSERDATA, LOGIN, LOGOUT, REGISTER, UPDATEIMG } from "../constants/constants"

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

export const updateImgActionCreator = (updt_img) => {
    return{
        type:UPDATEIMG,
        payload:updt_img
    }
}

export const logoutActionCreator = () =>{
    return {
        type:LOGOUT
    }
}