import React, { FC, useCallback, useState } from "react";
import { View, Text, TouchableOpacity, ListRenderItem } from "react-native";
import { useSelector } from "react-redux";
import { selectAuthorizationUserData } from "../../../../../src/appStorage/redux/authenticationState/authenticationStateSelector";
import { createRoom } from "../../../useCases/createRoom";
import { getUsersByName } from "../../../useCases/getUsersByName";
import { AddRoomsInput } from "../../components/addRoomsInput";
import { UsersList } from "../../components/usersList";
import { styles } from "./styles";

export const AddRoomsScreen: FC = () => {
    const CURRENT_USER_ID: string | null | undefined = useSelector(selectAuthorizationUserData)?.value.id;
    const [users, setUsers] = useState<Array<{ [key: string]: string }>>([]);
    const [chosenUsers, setChosenUsers] = useState<Array<{ [key: string]: string }>>([]);
    const [membersId, setMembersId] = useState<Array<{ [key: string]: string | null | undefined }>>([{ id: CURRENT_USER_ID }]);
    const [roomName, setRoomName] = useState('');

    const getUsersList = async (namePart: string) => {
        const usersResponse = await getUsersByName(namePart);
        if (usersResponse.data.data) {
            setUsers(usersResponse.data.data);
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
            await createRoom(CURRENT_USER_ID, membersId, roomName);
        }
    }, [chosenUsers])

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

    const renderChosenUser: ListRenderItem<{ [key: string]: string; }> = ({ item }) => {
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
            <View style={styles.topArea}>
                <AddRoomsInput
                    placeholderText={"user name"}
                    onChangeText={getUsersList} />
                <UsersList
                    users={chosenUsers}
                    renderUser={renderChosenUser}
                    horizontal={true}
                    isHeaderShown={true}
                    createUsersRoom={createUsersRoom}
                />
            </View>
            <View style={styles.userListArea}>
                <UsersList
                    users={users}
                    renderUser={renderUser}
                    horizontal={false}
                    isHeaderShown={false}
                    createUsersRoom={() => { }}
                />
                <AddRoomsInput
                    placeholderText={"room name"}
                    onChangeText={setRoomName} />
            </View>
        </View>
    );
}