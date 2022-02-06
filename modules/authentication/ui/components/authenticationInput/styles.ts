import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '95%',
    },
    authenticationInput: {
        width: '100%',
        height: 45,
        paddingLeft: 20,
        borderRadius: 3,
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        borderWidth: 2,
    },
    authenticationInputOnBlurColor: {
        backgroundColor: '#ffffff4d',
        borderColor: '#ffffff60',

    },
    authenticationInputOnFocusColor: {
        backgroundColor: '#ffffff8e',
        borderColor: '#ffffffa9',

    },
    authenticationInputOnErrorColor: {
        backgroundColor: '#dd72724d',
        borderColor: '#cc727260',

    },
    inputIcon: {
        position: 'absolute',
        right: 20
    }
});