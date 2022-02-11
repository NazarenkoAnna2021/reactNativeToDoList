import React, { FC } from "react";
import { ListRenderItem, Text, TouchableOpacity } from "react-native";

export const renderChosenUser: ListRenderItem<{ [key: string]: string; }> = ({ item }) => {
    
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
