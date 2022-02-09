import React, { FC } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from "../../../modules/authentication/ui/screens/signInScreen";
import { SignUpScreen } from "../../../modules/authentication/ui/screens/signUpScreen";
import { DrawerHomeNavigation } from "../drawerHomeNavigation";
import { ParamListBase } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectAuthorizationState } from "../../appStorage/redux/authenticationState/authenticationStateSelector";

export const StackAuthenticationNavigator: FC = () => {
    const Stack = createNativeStackNavigator<ParamListBase>();
    const isAuthorized: boolean = useSelector(selectAuthorizationState);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
             {isAuthorized
                ? ( <Stack.Screen name="DrawerHomeNavigation" component={DrawerHomeNavigation} /> )
                : ( <>
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="SignUn" component={SignUpScreen} />
                </> )
            }
        </Stack.Navigator>
    );
}