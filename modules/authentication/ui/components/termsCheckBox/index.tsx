import React, { FC } from 'react';
import { View, Text } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from './styles';

interface IProps {
    text: string;
    isChecked: boolean;
    onPress: (boolean: boolean) => void;
}

export const TermsCheckBox: FC<IProps> = ({ text, isChecked, onPress }) => {
    return (
        <View style={styles.container}>
            <BouncyCheckbox
                size={25}
                disableText={true}
                iconStyle={styles.iconStyle}
                isChecked={isChecked}
                onPress={() => onPress(!isChecked)}
            />
            <Text style={styles.textStyle}>{text}</Text>
        </View>
    );
}