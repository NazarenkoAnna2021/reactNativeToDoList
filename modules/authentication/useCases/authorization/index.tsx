import React, { createContext, useState, useMemo, FC, useEffect } from 'react';
import { IAuthorizationContext } from './entities/IAuthorizationContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthorizationContext = createContext<IAuthorizationContext>({
    isAuthorized: false,
    setIsAuthorize: (_) => { },
});

export const AuthorizationProvider: FC = ({ children }) => {
    const [isAuthorized, setIsAuthorize] = useState<boolean>(false);

    const appContext = useMemo(() => {
        return {
            isAuthorized,
            setIsAuthorize
        };
    }, [isAuthorized]);

    useEffect(() => {
        if (!isAuthorized) {
            AsyncStorage.removeItem('userData');
        }
    }, [isAuthorized])

    return (
        <AuthorizationContext.Provider value={appContext}>
            {children}
        </AuthorizationContext.Provider>
    );
}