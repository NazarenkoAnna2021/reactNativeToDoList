import { IUser } from "../../../../modules/authentication/useCases/validation/entities/IUser";

export interface IAction {
    type: 'SET_AUTHORIZE' | 'SET_USER_DATA' | 'SIGN_OUT';
    payload: boolean | IUser | null;
};

export const setIsAuthorizeAction = (value: boolean):IAction => {
    return {
        type: 'SET_AUTHORIZE',
        payload: value,
    };
};

export const setUserData = (value: IUser): IAction => {
    return {
        type: 'SET_USER_DATA',
        payload: value,
    };
}

export const signOut = (): IAction => {
    return {
        type: 'SIGN_OUT',
        payload: null
    };
};