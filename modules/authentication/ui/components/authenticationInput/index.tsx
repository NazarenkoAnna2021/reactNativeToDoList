import React, { FC, useState } from 'react';
import { TextInput, View, Image, ImageSourcePropType, Text } from 'react-native';
import { styles } from './styles';

interface IProps {
    icon: ImageSourcePropType;
    placeholderText: string;
    margin: {
        marginBottom: number;
    };
    value: string | null;
    errorText: string;
    setText: (value: string) => void;
    validation: (email: string) => boolean;
}

export const AuthenticationInput: FC<IProps> = ({ icon, placeholderText, margin, value, errorText, setText, validation }) => {
    const [inputStyle, setInputStyle] = useState<{ [key: string]: string }>(styles.authenticationInputOnBlurColor);
    const [isError, setIsError] = useState(false);

    const onBlur = (value: string): void => {
        if (validation(value)) {
            setInputStyle(styles.authenticationInputOnBlurColor);
            setIsError(false);
        } else {
            setInputStyle(styles.authenticationInputOnErrorColor);
            setIsError(true);
        }
    }

    return (
        <View style={isError ? null : margin}>
            <View style={styles.container}>
                <TextInput
                    style={[styles.authenticationInput, inputStyle]}
                    placeholder={placeholderText}
                    placeholderTextColor={'#fff'}
                    onChangeText={setText}
                    value={value ? value : ''}
                    onBlur={() => onBlur(String(value))}
                    onFocus={() => setInputStyle(styles.authenticationInputOnFocusColor)}
                />
                <Image style={styles.inputIcon} source={icon} />
            </View>
            {isError && <Text style={styles.errorText}>{errorText}</Text>}
        </View>
    );
}