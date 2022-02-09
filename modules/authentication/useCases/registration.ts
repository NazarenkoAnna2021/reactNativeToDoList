import axios from "axios";
import { Alert } from "react-native";

const URL = 'https://enigmatic-meadow-94776.herokuapp.com/registration';

export const registration = async (inputUserName: string, inputEmail: string, inputPassword: string) => {
    try {
        const response = await axios.post(URL, {
            name: inputUserName,
            email: inputEmail,
            password: inputPassword
        });

        return response;
    } catch (e: any) {
        Alert.alert(e.response.data.messageKey);
        return e.response;
    }
}