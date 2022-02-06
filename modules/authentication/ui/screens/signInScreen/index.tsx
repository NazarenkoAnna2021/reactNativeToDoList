import React, { FC, useContext, useEffect, useState } from "react";
import { View, ImageBackground, Text } from "react-native";
import { AuthenticationInput } from "../../components/authenticationInput";
import { PasswordInput } from "../../components/passwordInput";
import { AuthenticationButton } from "../../components/authenticationButton";
import { styles } from "./styles";
import { AuthenticationTransitionText } from "../../components/authenticationTransitionText";
import { NavigationProp } from "@react-navigation/native";
import { SignInText } from "../../components/signInText";
import { AuthorizationContext } from "../../../useCases/authorization";
import { getUser } from "../../../useCases/getUser";
import { isValidEmail } from "../../../useCases/validation/isValidEmail";
import { isValidPassword } from "../../../useCases/validation/isValidPassword";
import { resetStorage } from "../../../useCases/resetStorage";
import { IAuthorizationContext } from "../../../useCases/authorization/entities/IAuthorizationContext";

interface IProps {
    navigation: NavigationProp<{[key: string]: unknown}>
};

export const SignInScreen: FC<IProps> = ({ navigation }) => {
    const [inputEmail, setInputEmail] = useState<string | null>(null);
    const [inputPassword, setInputPassword] = useState<string | null>(null);
    const isAuthorized = useContext<IAuthorizationContext>(AuthorizationContext);
    const [isEnabledButton, setIsEnabledButton] = useState<boolean>(false);

    useEffect(() => {
        getUser({ setInputEmail, setInputPassword });
    }, []);

    useEffect(() => {
        setIsEnabledButton(checkInputs());
    }, [inputEmail, inputPassword]);

    const openScreen = (key: string): void => {
        navigation.navigate(key);
    };

    const checkInputs = (): boolean => {
        return !!inputEmail && !!inputPassword && isValidEmail(inputEmail) && isValidPassword(inputPassword);
    }

    const authorizeUser = (): void => {
        if (checkInputs()) {
            isAuthorized.setIsAuthorize(true);
            resetStorage(inputEmail, inputPassword);
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../../../assets/background.jpg')} resizeMode="cover" style={styles.background} />
            <View style={styles.inputArea}>
                <SignInText margin={styles.helloText} />
                <AuthenticationInput
                    icon={require('../../../../../assets/inputUser.png')}
                    placeholderText={'Email'}
                    margin={styles.inputMargin}
                    value={inputEmail}
                    setText={setInputEmail}
                    validation={isValidEmail}
                />
                <PasswordInput
                    iconHidden={require('../../../../../assets/crossedEye.png')}
                    iconShowed={require('../../../../../assets/eye.png')}
                    placeholderText={'Password'}
                    margin={styles.inputMargin}
                    value={inputPassword}
                    setText={setInputPassword}
                />
                <Text style={styles.forgotPassword}>Forgot the password?</Text>
            </View>
            <View style={styles.exceptArea}>
                <AuthenticationButton text="sign in" isEnabled={isEnabledButton} onPress={authorizeUser} />
                <AuthenticationTransitionText text={'Don\'t have an account? Sign up'} onPress={() => openScreen('SignUn')} />
            </View>
        </View>
    );
}