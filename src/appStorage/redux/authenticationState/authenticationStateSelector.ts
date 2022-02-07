import { RootState } from "../store"

export const selectAuthorizationState = (store: RootState) => store.authorizationReducer.isAuthorize;

export const selectAuthorizationUserData = (store: RootState) => store.authorizationReducer.userData;