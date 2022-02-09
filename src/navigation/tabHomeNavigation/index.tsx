import React, { FC } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddRoomsScreen } from "../../../modules/toDoRooms/ui/screens/addRoomsScreen";
import { HomePage } from "../../../modules/toDoRooms/ui/screens/homePage";
import { ParamListBase } from "@react-navigation/native";


export const TabHomeNavigation: FC = () => {
    const Tab = createBottomTabNavigator<ParamListBase>();

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Add room" component={AddRoomsScreen} />
        </Tab.Navigator>
    );
}
