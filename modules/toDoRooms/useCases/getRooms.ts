import axios from "axios";

const URL = 'https://enigmatic-meadow-94776.herokuapp.com/get-user-rooms';

export const getRooms = async (id: string,) => {
    try {
        const response = await axios.post(URL, {
            userId: id
        });
        return response;
    } catch (e: any) {
        return e.response;
    }
}