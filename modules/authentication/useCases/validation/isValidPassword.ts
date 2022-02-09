export const isValidPassword = (email: string): boolean => {
    return /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g.test(email)
}