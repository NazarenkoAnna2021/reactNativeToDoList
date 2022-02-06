export interface IAuthorizationContext {
    isAuthorized: boolean;
    setIsAuthorize: (value: boolean) => void;
}