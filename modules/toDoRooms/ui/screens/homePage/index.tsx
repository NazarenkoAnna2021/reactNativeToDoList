import React, { FC, useCallback, useEffect, useState } from "react";
import { styles } from "./styles";
import { HomePageText } from "../../components/homePageText";
import { Alert, FlatList, ListRenderItem, Text, TouchableOpacity, View } from "react-native";
import { AddRoomButton } from "../../components/addRoomButton";
import { TextInput } from "react-native-gesture-handler";
import { getRooms } from "../../../useCases/getRooms";
import { useSelector } from "react-redux";
import { selectAuthorizationUserData } from "../../../../../src/appStorage/redux/authenticationState/authenticationStateSelector";

export const HomePage: FC = () => {
    const CURRENT_USER_ID: string | null | undefined = useSelector(selectAuthorizationUserData)?.value.id;
    const [rooms, setRooms] = useState<Array<{ [key: string]: string }>>([]);

    useEffect(() => {
        getUserRooms();
    }, [])

    const getUserRooms = useCallback(async (): Promise<void> => {
        if (CURRENT_USER_ID) {
            const roomsResponse = await getRooms(CURRENT_USER_ID);
            if (roomsResponse?.data?.data) {
                setRooms(roomsResponse.data.data);
            } else {
                Alert.alert('error');
            }
        }
    }, [rooms]);

    const renderUserRooms: ListRenderItem<{ [key: string]: string; }> = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => Alert.alert('eeee')}
            >
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={rooms}
                renderItem={renderUserRooms}
                keyExtractor={rooms => rooms.id}
            />
        </View>

    );
}