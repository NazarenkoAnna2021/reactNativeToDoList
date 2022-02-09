import axios from "axios";
import { Alert } from "react-native";

const URL = 'https://enigmatic-meadow-94776.herokuapp.com/authorization';

export const authorization = async ( inputEmail: string | null, inputPassword: string | null) => {
    try {
        const response = await axios.post(URL, {
            email: inputEmail,
            password: inputPassword
        });
        return response;
    } catch (e: any) {
        Alert.alert(e.response.data.messageKey);
        return e.response;
    }
}