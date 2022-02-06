import React, { FC, useContext } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { LocalizationContext } from '../../../../../src/localization'
import { ThemesContext } from '../../../../../src/themes';
import { ILocalizationContext } from '../../../../../src/localization/entities/ILocalizationContext';
import { IThemesContext } from '../../../../../src/themes/entities/IThemesContext';

interface IProps {
    margin: {
        marginTop: number;
        marginBottom: number;
    }
}

export const HomePageText: FC<IProps> = ({ margin }) => {
    const LocalContext = useContext<ILocalizationContext>(LocalizationContext);
    const theme = useContext<IThemesContext>(ThemesContext);

    return (
        <View style={[styles.container, margin, {backgroundColor: theme.colors.backgroundColor}]}>
            <Text style={[styles.headerText, {color: theme.colors.color}]}>{LocalContext.translations.TITLE}</Text>
        </View>
    );
}