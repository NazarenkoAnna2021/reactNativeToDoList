import AsyncStorage from '@react-native-async-storage/async-storage';
import { IGetUser } from './entities/IGetUser';

export const getUser = async (params: IGetUser): Promise<void> => {
    try {
        const userData: string | null = await AsyncStorage.getItem('userData');
        if (userData) {
            params.setInputEmail(JSON.parse(userData).value.email);
            params.setInputPassword(JSON.parse(userData).value.password);
        }
    } catch (e) {
    }
}
