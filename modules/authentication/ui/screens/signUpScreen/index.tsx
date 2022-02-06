import React, { FC, useState, useEffect } from "react";
import { View, ImageBackground } from "react-native";
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

interface IProps {
    navigation: NavigationProp<any>
};

export const SignUpScreen: FC<IProps> = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [inputUserName, setInputUserName] = useState<string | null>(null);
    const [inputEmail, setInputEmail] = useState<string | null>(null);
    const [inputPassword, setInputPassword] = useState<string | null>(null);
    const [isEnabledButton, setIsEnabledButton] = useState<boolean>(false);

    const openScreen = (key: string): void => {
        navigation.navigate(key);
    };

    const checkInputs = (): boolean => {
        return !!inputUserName && !!inputEmail && !!inputPassword && isValidEmail(inputEmail) && isValidPassword(inputPassword) && isChecked;
    }

    useEffect(() => {
        if (checkInputs()) {
            setIsEnabledButton(checkInputs());
            resetStorage(inputEmail, inputPassword);
        }
    }, [inputUserName, inputEmail, inputPassword, isChecked]);

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
                    validation={() => true}
                />
                <AuthenticationInput
                    icon={require('../../../../../assets/mail.png')}
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
                <TermsCheckBox text="I read and agree to Terms & Conditions" isChecked={isChecked} onPress={setIsChecked} />
            </View>
            <View style={styles.exceptArea}>
                <AuthenticationButton text="sign up" onPress={() => openScreen('SignIn')} isEnabled={isEnabledButton} />
                <AuthenticationTransitionText text={'Already have an account? Sign in'} onPress={() => openScreen('SignIn')} />
            </View>
        </View>
    );
}
