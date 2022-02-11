import { storeUser } from '../storeUser';

export const resetStorage = async (inputEmail: string | null, inputPassword: string | null, id: string | null) => {
    await storeUser({
        value: {
            name: 'dss',
            email: inputEmail,
            password: inputPassword, 
            id: id
        }
    })
}
