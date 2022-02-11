import { createStore } from 'redux';
import { IUser } from '../../../modules/shared/entities/IUser';
import { rootReducer } from './rootReducer';

export const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;

export interface RootState {
    authorizationReducer: {
        isAuthorize: boolean;
        userData: IUser | null;
    }
};
