import { storeUser } from '../storeUser';

export const resetStorage = async (inputEmail: string | null, inputPassword: string | null) => {
    await storeUser({
        value: {
            email: inputEmail,
            password: inputPassword
        }
    })
}
