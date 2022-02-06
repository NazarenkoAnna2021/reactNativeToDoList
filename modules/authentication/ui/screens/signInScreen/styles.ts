import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HIGHT = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between'
    },
    background: {
        flex: 1,
        zIndex: 1,
        position: 'absolute',
        height: SCREEN_HIGHT,
        width: SCREEN_WIDTH
    },
    inputArea: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        width: '100%',
    },
    exceptArea: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        zIndex: 2,
        width: SCREEN_WIDTH,
        bottom: 0,
    },
    forgotPassword: {
        width: '95%',
        textAlign: 'right',
        color: '#fff',
        fontWeight: '500'
    },
    helloText: {
        marginTop: 45,
        marginBottom: 85
    },
    inputMargin: {
        marginBottom: 20
    }
});