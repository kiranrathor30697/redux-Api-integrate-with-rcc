import { Action } from "history"
import { LOGIN } from "../constants/constants"

const initialState = {
    logindata:{}
}
export const loginReducer = (state=initialState,action)=>{
    switch(action.type){
        case LOGIN :
            return {
                ...state,
                logindata:action.payload
            }
    }
    return state
}