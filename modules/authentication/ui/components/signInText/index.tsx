import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface IProps {
    margin: {
        marginTop: number;
        marginBottom: number;
    }
}

export const SignInText: FC<IProps> = ({ margin }) => {
    return (
        <View style={[styles.container, margin]}>
            <Text style={styles.headerText}>Hello</Text>
            <Text style={styles.regularText}>Sign in your account</Text>
        </View>
    );
}