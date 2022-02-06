import React, { FC } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Menu } from "../../../modules/toDoRooms/ui/screens/menu";
import { HomePage } from "../../../modules/toDoRooms/ui/screens/homePage";
import { ParamListBase } from "@react-navigation/native";


export const TabHomeNavigation: FC = () => {
    const Tab = createBottomTabNavigator<ParamListBase>();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Menu" component={Menu} />
        </Tab.Navigator>
    );
}
