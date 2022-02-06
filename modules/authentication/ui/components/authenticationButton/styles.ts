import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    exceptButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        borderRadius: 5,
        height: 55,
        backgroundColor: '#3366ff',
    },
    unableButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        borderRadius: 5,
        height: 55,
        backgroundColor: '#7899fc',
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '500',
        textTransform: 'uppercase'
    }
});