import React, { FC, useState } from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './styles'

interface IProps {
    placeholderText: string;
    onChangeText: (value: string) => void;
}

export const AddRoomsInput: FC<IProps> = ({ placeholderText, onChangeText }) => {
    const [inputStyle, setInputStyle] = useState<{ [key: string]: string }>(styles.authenticationInputOnBlurColor);

    return (
        <TextInput
            style={[styles.addRoomsInput, inputStyle]}
            placeholder={placeholderText}
            placeholderTextColor={'#fff'}
            onChangeText={(value) => onChangeText(value)}
            onBlur={() => setInputStyle(styles.authenticationInputOnBlurColor)}
            onFocus={() => setInputStyle(styles.authenticationInputOnFocusColor)}
        />
    );
}