import React, { FC, useContext, useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import { LocalizationContext } from "../../../../../src/localization";
import { ILanguages } from "../../../../../src/localization/entities/ILanguages";
import { ThemesContext } from "../../../../../src/themes";
import { styles } from "./styles";
import { AuthorizationContext } from "../../../../authentication/useCases/authorization";
import { ILocalizationContext } from "../../../../../src/localization/entities/ILocalizationContext";
import { IAuthorizationContext } from "../../../../authentication/useCases/authorization/entities/IAuthorizationContext";
import { IThemesContext } from "../../../../../src/themes/entities/IThemesContext";

export const DrawerContent: FC = () => {
    const LocalContext = useContext<ILocalizationContext>(LocalizationContext);
    const isAuthorizeContext = useContext<IAuthorizationContext>(AuthorizationContext);
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const theme = useContext<IThemesContext>(ThemesContext);

    const toggleSwitch = (): void => {
        theme.setTheme(theme.theme === 'LIGHT' ? 'DARK' : 'LIGHT');
        return setIsEnabled(previousState => !previousState);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.sideMenuBackground }]}>
            <View style={styles.area}>
                <Text style={{ color: theme.colors.color }}>{LocalContext.translations.THEME_SWITCH_TITLE}</Text>
                <Switch
                    trackColor={{ false: '#fff', true: '#000' }}
                    thumbColor={theme.colors.backgroundColor}
                    ios_backgroundColor={theme.colors.backgroundColor}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.area}>
                <Text style={{ color: theme.colors.color }}>{LocalContext.translations.LANGUAGE_RADIO_BUTTON_TITLE}</Text>
                <RadioForm
                    radio_props={LocalContext.translations.LANGUAGES_NAMES}
                    initial={LocalContext.language}
                    onPress={(value: ILanguages) => { LocalContext.setLanguage(value) }}
                />
            </View>
            <View style={styles.area}>
                <TouchableOpacity onPress={async () => { isAuthorizeContext.setIsAuthorize(false) }}>
                    <Text style={{ color: theme.colors.color }}>
                        {LocalContext.translations.LOG_OUT_BUTTON_TITLE}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}