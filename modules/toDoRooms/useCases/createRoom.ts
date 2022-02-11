import axios from "axios";

const URL = 'https://enigmatic-meadow-94776.herokuapp.com/create-room';

export const createRoom = async (admin: string, members: Array<{ [key: string]: string | null | undefined }>, name: string) => {
    try {
        const response = await axios.post(URL, {
            admin: admin,
            members: members,
            name: name
        });
        console.log(response.data.data)
        return response;
    } catch (e: any) {
        console.log(e.response.data)
        return e.response;
    }
}