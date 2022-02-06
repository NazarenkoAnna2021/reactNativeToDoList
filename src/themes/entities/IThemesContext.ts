import { IThems } from "./IThems";

export interface IThemesContext {
    colors: {[key: string]: string};
    theme: IThems;
    setTheme: (value: IThems) => void;
}