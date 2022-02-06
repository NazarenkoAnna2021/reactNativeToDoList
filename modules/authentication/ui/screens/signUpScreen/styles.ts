import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HIGHT = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        height: SCREEN_HIGHT,
        width: SCREEN_WIDTH
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
        zIndex: 2,
        width: '100%',
        height: 120,
        bottom: 0,
    },
    avatarMargin: {
        marginTop: 40,
        marginBottom: 65
    },
    inputMargin: {
        marginBottom: 20
    }
});