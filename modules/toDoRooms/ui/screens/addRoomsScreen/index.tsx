import React, { FC, useEffect, useMemo, useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { createRoom } from "../../../useCases/createRoom";
import { getUsersByName } from "../../../useCases/getUsersByName";
import { AddRoomButton } from "../../components/addRoomButton";
import { styles } from "./styles";

export const AddRoomsScreen: FC = () => {
    const [users, setUsers] = useState<Array<{ [key: string]: string }>>([]);
    const [chosenUsers, setChosenUsers] = useState<Array<{ [key: string]: string }>>([]);

    const getUsersList = async (namePart: string) => {
        const usersResponse = await getUsersByName(namePart);
        if (usersResponse.data.data) {
            setUsers(usersResponse.data.data);
        }
    };

    const moveUserToChosen = (item: { [key: string]: string; id?: any; }) => {
        setChosenUsers(!chosenUsers.includes(item) ? [...chosenUsers, item] : chosenUsers);
        setUsers(users.filter(user => user.id !== item.id))
    }

    const moveToUsers = (item: { [key: string]: string; id?: any; }) => {
        setUsers(!users.includes(item) ? [...users, item] : users);
        setChosenUsers(chosenUsers.filter(user => user.id !== item.id))
    }

    const renderUser: FC<any> = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ borderWidth: 2 }}
                onPress={() => moveUserToChosen(item)}
            >
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
            </TouchableOpacity>
        );
    }

    const renderChosenUser: FC<any> = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ borderWidth: 2 }}
                onPress={() => moveToUsers(item)}
            >
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={{ width: '100%', borderWidth: 2 }}
                onChangeText={(value) => getUsersList(value)}
            />
            <View style={styles.listsArea}>
                <FlatList
                    ListHeaderComponent={
                        <AddRoomButton
                            text={"Add Room"}
                            onPress={() => createRoom('6202530188e0690016d76529', chosenUsers.map(user => user.id), 'room')}
                        />}
                    data={chosenUsers}
                    renderItem={renderChosenUser}
                    keyExtractor={chosenUsers => chosenUsers.id}
                    horizontal={true}
                />
                <FlatList
                    data={users}
                    renderItem={renderUser}
                    keyExtractor={users => users.id}
                />
            </View>
        </View>
    );
}