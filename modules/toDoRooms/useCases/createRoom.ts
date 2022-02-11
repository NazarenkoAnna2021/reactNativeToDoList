import axios from "axios";
import { IRoomData } from "./entities/IRoomData";

const URL = 'https://enigmatic-meadow-94776.herokuapp.com/create-room';

export const createRoom = async (admin: string, members: Array<{ [key: string]: string | null | undefined }>, name: string): Promise<IRoomData> => {
    try {
        console.log(admin, members, name)
        const response = await axios.post(URL, {
            admin: admin,
            members: members,
            name: name
        });
        console.log(response.data)
        return response.data;
    } catch (e: any) {
        console.log(e.response.data)
        return e.response.data;
    }
}