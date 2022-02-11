import React, { FC, useCallback, useState } from "react";
import { View, Text, TouchableOpacity, ListRenderItem, FlatList, Alert } from "react-native";
import { useSelector } from "react-redux";
import { selectAuthorizationUserData } from "../../../../../src/appStorage/redux/authenticationState/authenticationStateSelector";
import { createRoom } from "../../../useCases/createRoom";
import { IError } from "../../../useCases/entities/IError";
import { IRoomData } from "../../../useCases/entities/IRoomData";
import { getUsersByName } from "../../../useCases/getUsersByName";
import { AddRoomButton } from "../../components/addRoomButton";
import { AddRoomsInput } from "../../components/addRoomsInput";
import { styles } from "./styles";

export const AddRoomsScreen: FC = () => {
    const CURRENT_USER_ID: string | null | undefined = useSelector(selectAuthorizationUserData)?.value.id;
    const [users, setUsers] = useState<Array<{ [key: string]: string }>>([]);
    const [chosenUsers, setChosenUsers] = useState<Array<{ [key: string]: string }>>([]);
    const [membersId, setMembersId] = useState<Array<{ [key: string]: string | null | undefined }>>([{ id: CURRENT_USER_ID }]);
    const [roomName, setRoomName] = useState<string>('');

    const getUsersList = async (namePart: string) => {
        const usersResponse = await getUsersByName(namePart);
        if (usersResponse?.data?.data) {
            setUsers(usersResponse.data.data);
        } else {
            Alert.alert('error');
        }
    };

    const moveUserToChosen = (item: { [key: string]: string; id?: any; }) => {
        setChosenUsers(!chosenUsers.includes(item) ? [...chosenUsers, item] : chosenUsers);
        setUsers(users.filter(user => user.id !== item.id))
        setMembersId([...membersId, { id: item.id }]);
    }

    const moveToUsers = (item: { [key: string]: string; id?: any; }) => {
        setUsers(!users.includes(item) ? [...users, item] : users);
        setChosenUsers(chosenUsers.filter(user => user.id !== item.id))
    }

    const createUsersRoom = useCallback(async () => {
        if (CURRENT_USER_ID) {
            const room: IRoomData = await createRoom(CURRENT_USER_ID, membersId, roomName);
            console.log(room);
            if (room.status === 'error') {
                Alert.alert(room.status);
            }
        }
    }, [chosenUsers])

    const renderUser: ListRenderItem<{ [key: string]: string; }> = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => moveUserToChosen(item)}
            >
                <Text style={styles.membersTitle}>{item.name}</Text>
                <Text>{item.email}</Text>
            </TouchableOpacity>
        );
    }

    const renderChosenUser: ListRenderItem<{ [key: string]: string; }> = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.chosenUserItem}
                onPress={() => moveToUsers(item)}
            >
                <Text style={styles.membersName}>{item.name}</Text>
                <Text>{item.email}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.topArea}>
                <View style={styles.addRoomArea}>
                    <AddRoomsInput
                        placeholderText={"room name"}
                        onChangeText={setRoomName} />
                    <AddRoomButton text={"Add Room"} onPress={createUsersRoom} />
                </View>
                <Text style={styles.membersTitle}>Members</Text>
                <View style={styles.checkedUsersList}>
                    <FlatList
                        data={chosenUsers}
                        renderItem={renderChosenUser}
                        keyExtractor={chosenUsers => chosenUsers.id}
                        horizontal={true}
                    />
                </View>
                <AddRoomsInput
                    placeholderText={"user name"}
                    onChangeText={getUsersList} />


            </View>
            <View style={styles.userList}>
                <FlatList
                    data={users}
                    renderItem={renderUser}
                    keyExtractor={users => users.id}
                />
            </View>
        </View>
    );
}