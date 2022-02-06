import React, { createContext, useState, useMemo, FC, useEffect } from 'react';
import { ILanguages } from './entities/ILanguages';
import { ILocalizationContext } from './entities/ILocalizationContext';
import { ITranslations } from './entities/ITranslations';
const LANGUAGES_JSON: ITranslations = require('./localization.json');

export const LocalizationContext = createContext<ILocalizationContext>({
    translations: LANGUAGES_JSON[LANGUAGES_JSON.INITIAL_LANGUAGE],
    language: LANGUAGES_JSON.INITIAL_LANGUAGE,
    setLanguage: (_) => { }
});

export const LocalizationProvider: FC = ({ children }) => {
    const [language, setLanguage] = useState<ILanguages>(LANGUAGES_JSON.INITIAL_LANGUAGE);
    const [translations, setTranslations] = useState<{ [key: string]: string }>(LANGUAGES_JSON[language]);

    const appContext = useMemo(() => {
        return {
            translations,
            language,
            setLanguage
        };
    }, [language, translations]);

    useEffect(() => {
        if (LANGUAGES_JSON[language]) {
            setTranslations(LANGUAGES_JSON[language]);
        };
    }, [language])

    return (
        <LocalizationContext.Provider value={appContext}>
            {children}
        </LocalizationContext.Provider>
    );
};