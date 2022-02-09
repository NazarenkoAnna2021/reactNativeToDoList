import axios from "axios";

const URL = 'https://enigmatic-meadow-94776.herokuapp.com/find-users';

export const getUsersByName = async (name: string) => {
    try {
        const response = await axios.post(URL, {
            findBy: 'name',
            value: name
        });

        return response;
    } catch (e: any) {
        return e.response;
    }
}