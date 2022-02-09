import React, { FC, useState, useEffect, useCallback } from "react";
import { View, ImageBackground, Text } from "react-native";
import { AuthenticationInput } from "../../components/authenticationInput";
import { PasswordInput } from "../../components/passwordInput";
import { TermsCheckBox } from "../../components/termsCheckBox";
import { UserAvatar } from '../../components/userAvatar';
import { AuthenticationButton } from "../../components/authenticationButton";
import { styles } from "./styles";
import { AuthenticationTransitionText } from "../../components/authenticationTransitionText";
import { isValidEmail } from "../../../useCases/validation/isValidEmail";
import { NavigationProp } from "@react-navigation/native";
import { isValidPassword } from "../../../useCases/validation/isValidPassword";
import { resetStorage } from "../../../useCases/resetStorage";
import { AppDispatch } from "../../../../../src/appStorage/redux/store";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../../../src/appStorage/redux/authenticationState/authenticationStateActions";
import { registration } from "../../../useCases/registration";
import { isValidUserName } from "../../../useCases/validation/isValidUserName";

interface IProps {
    navigation: NavigationProp<any>
};

export const SignUpScreen: FC<IProps> = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [inputUserName, setInputUserName] = useState<string | null>(null);
    const [inputEmail, setInputEmail] = useState<string | null>(null);
    const [inputPassword, setInputPassword] = useState<string | null>(null);
    const [isEnabledButton, setIsEnabledButton] = useState<boolean>(false);
    const dispatch: AppDispatch = useDispatch();


    const checkInputs = (): boolean => {
        return !!inputUserName && !!inputEmail && !!inputPassword && isValidEmail(inputEmail) && isValidPassword(inputPassword) && isChecked;
    }

    const signUp = useCallback(async () => {
        if (inputUserName && inputEmail && inputPassword) {
            const userReg = await registration(inputUserName, inputEmail, inputPassword);
            if (userReg.data.status === 'ok') {
                navigation.navigate('SignIn');
                setLocalData();
            }
        }
    }, [inputUserName, inputEmail, inputPassword]);

    const setLocalData = () => {
        if (checkInputs()) {
            resetStorage(inputEmail, inputPassword);
            dispatch(setUserData({
                value: {
                    userName: inputUserName,
                    email: inputEmail,
                    password: inputPassword
                }
            }))
        }
    };

    useEffect(() => {
        setIsEnabledButton(checkInputs());
    }, [inputUserName, inputEmail, inputPassword])

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../../../assets/background.jpg')} resizeMode="cover" style={styles.background} />
            <View style={styles.inputArea}>
                <UserAvatar margin={styles.avatarMargin} />
                <AuthenticationInput
                    icon={require('../../../../../assets/inputUser.png')}
                    placeholderText={'User name'}
                    margin={styles.inputMargin}
                    value={inputUserName}
                    setText={setInputUserName}
                    validation={isValidUserName}
                    errorText=''
                />
                <AuthenticationInput
                    icon={require('../../../../../assets/mail.png')}
                    placeholderText={'Email'}
                    margin={styles.inputMargin}
                    value={inputEmail}
                    setText={setInputEmail}
                    validation={isValidEmail}
                    errorText='Email must be in format: user@email.com'
                />
                <PasswordInput
                    iconHidden={require('../../../../../assets/crossedEye.png')}
                    iconShowed={require('../../../../../assets/eye.png')}
                    placeholderText={'Password'}
                    margin={styles.inputMargin}
                    value={inputPassword}
                    setText={setInputPassword}
                    errorText='Password must contain  numbers, big and small letters'
                />
                <TermsCheckBox text="I read and agree to Terms & Conditions" isChecked={isChecked} onPress={setIsChecked} />
            </View>
            <View style={styles.exceptArea}>
                <AuthenticationButton text="sign up" onPress={signUp} isEnabled={isEnabledButton} />
                <AuthenticationTransitionText text={'Already have an account? Sign in'} onPress={() => navigation.navigate('SignIn')} />
            </View>
        </View>
    );
}
