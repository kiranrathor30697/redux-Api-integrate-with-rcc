import { GETUSERDATA } from "../constants/constants";
const initialState = {
    get_user:{}
}
export const getUserReducer = (state=initialState,action) => {
    switch(action.type){
        case GETUSERDATA:
            return{
                ...state,
                get_user:action.payload
            }
    }
    return state
}