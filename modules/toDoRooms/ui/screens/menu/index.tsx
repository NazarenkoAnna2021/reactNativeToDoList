import React, { FC } from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";

export const Menu: FC = () => {
    return (
        <View style={styles.container}>
            {/* <ImageBackground source={require('../../../assets/background.jpg')} resizeMode="cover" style={styles.background} /> */}
            <Text style={styles.homeText}>Menu</Text>
        </View>
    );
}