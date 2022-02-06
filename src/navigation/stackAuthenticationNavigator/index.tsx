import React, { FC, useContext } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from "../../../modules/authentication/ui/screens/signInScreen";
import { SignUpScreen } from "../../../modules/authentication/ui/screens/signUpScreen";
import { DrawerHomeNavigation } from "../drawerHomeNavigation";
import { AuthorizationContext } from "../../../modules/authentication/useCases/authorization";
import { ParamListBase } from "@react-navigation/native";
import { IAuthorizationContext } from "../../../modules/authentication/useCases/authorization/entities/IAuthorizationContext";
// import { TabHomeNavigation } from "../tabHomeNavigation";

export const StackAuthenticationNavigator: FC = () => {
    const Stack = createNativeStackNavigator<ParamListBase>();
    const isAuthorized = useContext<IAuthorizationContext>(AuthorizationContext);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthorized.isAuthorized ? (
                <Stack.Screen name="HomePage" component={DrawerHomeNavigation} />
            ) : (
                <>
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="SignUn" component={SignUpScreen} />
                </>
            )}
        </Stack.Navigator>
    );
}