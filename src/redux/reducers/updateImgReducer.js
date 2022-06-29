import { UPDATEIMG } from "../constants/constants"
const initialState = {
    updt_img:{}
}

export const updateImgReducer = (state=initialState,action) => {
    switch(action.type){
        case UPDATEIMG:
            return {
                ...state,
                updt_img:action.payload
            }
    }
    return state
}