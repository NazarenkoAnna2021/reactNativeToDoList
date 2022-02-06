import React, { FC } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../../../modules/toDoRooms/ui/components/drawerContent";
import { HomePage } from "../../../modules/toDoRooms/ui/screens/homePage";
import { ParamListBase } from "@react-navigation/native";

export const DrawerHomeNavigation: FC = () => {
    const Drawer = createDrawerNavigator<ParamListBase>();

    return (
        <Drawer.Navigator drawerContent={() => <DrawerContent/>} screenOptions={{headerShown: false}}>
            <Drawer.Screen name="Home" component={HomePage} />
        </Drawer.Navigator>
    );
}
