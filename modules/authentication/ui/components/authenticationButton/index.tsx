import React, { FC } from 'react';
import {TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface IProps {
    text: string;
    isEnabled: boolean;
    onPress: () => void;
}

export const AuthenticationButton: FC<IProps> = ({ text, isEnabled, onPress }) => {
    return (
        <TouchableOpacity style={isEnabled ? styles.exceptButton : styles.unableButton} onPress={onPress} disabled={!isEnabled}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}