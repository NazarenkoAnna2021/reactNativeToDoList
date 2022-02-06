import { ReactNativeRadioFormProps } from "react-native-simple-radio-button";
import { ILanguages } from "./ILanguages";

export interface ILocalizationContext {
    translations: { [key: string]: string };
    language: ILanguages;
    setLanguage: (value: ILanguages) => void;
}