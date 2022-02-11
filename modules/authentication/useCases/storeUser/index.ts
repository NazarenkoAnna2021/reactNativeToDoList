import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from '../../../shared/entities/IUser';

export const storeUser = async (value: IUser) => {
    try {
        const userData: string = JSON.stringify(value);
        await AsyncStorage.setItem('userData', userData);
    } catch (e) {

    }
};