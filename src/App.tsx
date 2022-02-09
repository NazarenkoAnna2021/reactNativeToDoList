import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { ContainerNavigator } from './navigation/containerNavigator';
import { StyleSheet } from 'react-native';
import { LogBox } from 'react-native';
import { LocalizationProvider } from './localization'
import { ThemesProvider } from './themes';
import { Provider } from 'react-redux';
import { store } from './appStorage/redux/store';

LogBox.ignoreLogs([
    "If you want to use Reanimated 2 then go through our installation steps https://docs.swmansion.com/react-native-reanimated/docs/installation",
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!"
]);

export const App: FC = () => {
    return (
        <LocalizationProvider >
            <ThemesProvider>
                <Provider store={store}>
                    <SafeAreaView style={styles.container}>
                        <ContainerNavigator />
                    </SafeAreaView>
                </Provider>
            </ThemesProvider>
        </LocalizationProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});