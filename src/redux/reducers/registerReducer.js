import { REGISTER } from "../constants/constants"

const token = {
    regData:{}
}
export const registerReducer = (state=token,action) => {
    switch(action.type){
        case REGISTER:
            return{
                ...state,
                regData:action.payload 
            }
    }
    return state
}