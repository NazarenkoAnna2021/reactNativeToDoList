import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface IProps {
    text: string;
    onPress: () => void;
}

export const AddRoomButton: FC<IProps> = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.exceptButton} onPress={onPress} >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}