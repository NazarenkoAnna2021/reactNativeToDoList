import React, { FC, useState } from 'react';
import { TextInput, View, Image, ImageSourcePropType } from 'react-native';
import { styles } from './styles';

interface IProps {
    icon: ImageSourcePropType;
    placeholderText: string;
    margin: {
        marginBottom: number;
    };
    value: string | null;
    setText: (value: string) => void;
    validation: (email: string) => boolean;
}

export const AuthenticationInput: FC<IProps> = ({ icon, placeholderText, margin, value, setText, validation }) => {
    const [inputStyle, setInputStyle] = useState<{ [key: string]: string }>(styles.authenticationInputOnBlurColor);

    const onBlur = (value: string): void => {
        if (validation(value)) {
            setInputStyle(styles.authenticationInputOnBlurColor);
        } else {
            setInputStyle(styles.authenticationInputOnErrorColor);
        }
    }

    return (
        <View style={[styles.container, margin]}>
            <TextInput
                style={[styles.authenticationInput, inputStyle]}
                placeholder={placeholderText}
                placeholderTextColor={'rgb(255, 255, 255)'}
                onChangeText={setText}
                value={value ? value : ''}
                onBlur={() => onBlur(String(value))}
                onFocus={ () => setInputStyle(styles.authenticationInputOnFocusColor)}
            />
            <Image style={styles.inputIcon} source={icon} />
        </View>
    );
}