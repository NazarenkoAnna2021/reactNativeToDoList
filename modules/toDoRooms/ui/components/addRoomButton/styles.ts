import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    exceptButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 85,
        borderRadius: 5,
        height: 40,
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
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        textTransform: 'uppercase'
    }
});