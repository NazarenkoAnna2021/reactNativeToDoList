export interface IError {
    data:{
    error:
    [
        {
            location: string;
            msg: string;
            param: string;
        }
    ],
        messageKey: string;
    status: "error";
}
}