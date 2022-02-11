import React, { ComponentType, FC } from "react";
import { FlatList } from "react-native";
import { AddRoomButton } from "../addRoomButton";
import { styles } from "./styles";

interface IProps {
    users: Array<{ [key: string]: string }>;
    renderUser: FC<any>;
    horizontal: boolean;
    isHeaderShown: boolean;
    createUsersRoom: () => void
}

export const UsersList: FC<IProps> = ({ users, renderUser, horizontal, isHeaderShown, createUsersRoom }) => {
    return (
        <FlatList
            style={ styles.list}
            ListHeaderComponent={
                isHeaderShown
                    ? <AddRoomButton text={"Add Room"} onPress={createUsersRoom} />
                    : null
            }
            data={users}
            renderItem={renderUser}
            keyExtractor={users => users.id}
            horizontal={horizontal}
        />
    );
}