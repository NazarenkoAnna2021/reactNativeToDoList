import { IThems } from "./IThems";

export interface IColors {
    AVAILABLE_THEMES: Array<IThems>;
    LIGHT: { [key: string]: string };
    DARK: { [key: string]: string };
    INITIAL_THEME: IThems
}