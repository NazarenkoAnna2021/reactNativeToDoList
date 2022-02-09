import React, { FC } from "react";
import { styles } from "./styles";
import { HomePageText } from "../../components/homePageText";
import { View } from "react-native";
import { AddRoomButton } from "../../components/addRoomButton";
import { TextInput } from "react-native-gesture-handler";

export const HomePage: FC = () => {
    return (
        <View style={styles.container}>
            {/* <HomePageText margin={styles.helloText} /> */}
        </View>

    );
}