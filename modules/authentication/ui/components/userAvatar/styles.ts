import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 120,
        backgroundColor: '#fff'
    },
    avatarImg: {
        width: 40,
        height: 40
    },
    changeAvatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        position: 'absolute',
        marginLeft: 100,
        right: 0,
        marginTop: 100,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: '#edf0f5'
    },
    textAddAvatar: {
        color: '#60677b',
        fontSize: 30
    }
});