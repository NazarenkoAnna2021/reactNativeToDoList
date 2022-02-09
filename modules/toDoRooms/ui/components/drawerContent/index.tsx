import React, { FC, useContext, useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import { LocalizationContext } from "../../../../../src/localization";
import { ILanguages } from "../../../../../src/localization/entities/ILanguages";
import { ThemesContext } from "../../../../../src/themes";
import { styles } from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILocalizationContext } from "../../../../../src/localization/entities/ILocalizationContext";
import { IThemesContext } from "../../../../../src/themes/entities/IThemesContext";
import { AppDispatch } from "../../../../../src/appStorage/redux/store";
import { useDispatch } from "react-redux";
import { signOut } from "../../../../../src/appStorage/redux/authenticationState/authenticationStateActions";

export const DrawerContent: FC = () => {
    const LocalContext = useContext<ILocalizationContext>(LocalizationContext);
    const dispatch: AppDispatch = useDispatch();
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const theme = useContext<IThemesContext>(ThemesContext);

    const toggleSwitch = (): void => {
        theme.setTheme(theme.theme === 'LIGHT' ? 'DARK' : 'LIGHT');
        return setIsEnabled(previousState => !previousState);
    };

    const setSignOut = async () => {
        dispatch(signOut());
        await AsyncStorage.removeItem('userData');
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.sideMenuBackground }]}>
            <View style={styles.area}>
                <Text style={{ color: theme.colors.color }}>{LocalContext.translations.THEME_SWITCH_TITLE}</Text>
                <Switch
                    trackColor={{ false: '#000', true: '#fff' }}
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
                <TouchableOpacity onPress={setSignOut}>
                    <Text style={{ color: theme.colors.color }}>
                        {LocalContext.translations.LOG_OUT_BUTTON_TITLE}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}