import React, { FC, useEffect, useState } from 'react';
import { TextInput, View, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { isValidPassword } from '../../../useCases/validation/isValidPassword';
import { styles } from './styles';

interface IProps {
    iconHidden: ImageSourcePropType;
    iconShowed: ImageSourcePropType;
    placeholderText: string;
    margin: {
        marginBottom: number;
    };
    value: string | null;
    setText: (string: string) => void;
}

export const PasswordInput: FC<IProps> = ({ iconHidden, iconShowed, placeholderText, margin, value, setText }) => {
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const [icon, setIcon] = useState<ImageSourcePropType>(iconHidden);
    const [inputStyle, setInputStyle] = useState<{ [key: string]: string }>(styles.authenticationInputOnBlurColor);

    const onBlur = (value: string): void => {
        if (isValidPassword(value)) {
            setInputStyle(styles.authenticationInputOnBlurColor);
        } else {
            setInputStyle(styles.authenticationInputOnErrorColor);
        }
    }

    useEffect(() => {
        isHidden ? setIcon(iconHidden) : setIcon(iconShowed)
    }, [isHidden]);

    return (
        <View style={[styles.container, margin]}>
            <TextInput
                style={[styles.authenticationInput, inputStyle]}
                placeholder={placeholderText}
                placeholderTextColor={'rgb(255, 255, 255)'}
                secureTextEntry={isHidden}
                onChangeText={setText}
                value={value ? value : ''}
                onFocus={() => setInputStyle(styles.authenticationInputOnFocusColor)}
                onBlur={() => onBlur(String(value))}
            />
            <TouchableOpacity style={styles.inputIcon} onPress={() => setIsHidden(!isHidden)}>
                <Image style={styles.iconImg} source={icon} />
            </TouchableOpacity>
        </View>
    );
}