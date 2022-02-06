import React, { FC } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface IProps {
    margin: {
        marginTop: number;
        marginBottom: number;
    }
}

export const UserAvatar: FC<IProps> = ({ margin }) => {
    return (
        <View style={[styles.container, margin]}>
            <Image style={styles.avatarImg} source={require('../../../../../assets/defaultUser1.jpg')} />
            <TouchableOpacity style={styles.changeAvatar}>
                <Text style={styles.textAddAvatar}>+</Text>
            </TouchableOpacity>
        </View>
    );
}