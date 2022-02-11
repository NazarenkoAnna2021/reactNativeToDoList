import { IUser } from "../../../../modules/shared/entities/IUser"
import { IAction } from "./authenticationStateActions";

const initialState: IAuthorizationReducer = {
    isAuthorize: false,
    userData: null,
};

interface IAuthorizationReducer {
    [key: string]: boolean | IUser | null;
};

export const authorizationReducer = (store = initialState, action: IAction) => {
    const { type, payload }: IAction = { ...action };
    switch (type) {
        case 'SET_AUTHORIZE': return {
            ...store,
            isAuthorize: payload,
        };
        case 'SET_USER_DATA': return {
            ...store,
            userData: payload,
        };
        case 'SIGN_OUT': return {
            isAuthorize: false,
            userData: null,
        };
        default: return store;
    };
};