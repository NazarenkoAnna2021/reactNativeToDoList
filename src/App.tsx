import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { ContainerNavigator } from './navigation/containerNavigator';
import { StyleSheet } from 'react-native';
import { LogBox } from 'react-native';
import { LocalizationProvider } from './localization'
import { AuthorizationProvider } from '../modules/authentication/useCases/authorization';
import { ThemesProvider } from './themes';

LogBox.ignoreLogs([
    "If you want to use Reanimated 2 then go through our installation steps https://docs.swmansion.com/react-native-reanimated/docs/installation",
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!"
]);

export const App: FC = () => {
    return (
        <LocalizationProvider >
            <ThemesProvider>
                <AuthorizationProvider>
                    <SafeAreaView style={styles.container}>
                        <ContainerNavigator />
                    </SafeAreaView>
                </AuthorizationProvider>
            </ThemesProvider>
        </LocalizationProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});