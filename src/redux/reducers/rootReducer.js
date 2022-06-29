import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";
import { getUserReducer } from "./getUserReducer";
import { updateImgReducer } from "./updateImgReducer";

export const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    getUserReducer,
    updateImgReducer
})
