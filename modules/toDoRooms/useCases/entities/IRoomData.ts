export interface IRoomData {
    data: {
        admin: string;
        id: string;
        members: Array<{ [key: string]: string }>;
        name: string;
    };
    status: string;
}