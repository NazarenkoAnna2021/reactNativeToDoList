import { ILanguages } from "./ILanguages";

export interface ITranslations {
    AVAILABLE_LANGUAGE: Array<ILanguages>;
    RU: { [key: string]: string };
    EN: { [key: string]: string };
    INITIAL_LANGUAGE: ILanguages;
}