import { combineReducers } from "redux"
import { authorizationReducer } from "./authenticationState/authorizationStateReducer";

export const rootReducer = combineReducers({
    authorizationReducer
});