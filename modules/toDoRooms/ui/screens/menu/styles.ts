import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HIGHT = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
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
    homeText: {
        zIndex: 2,
        width: '100%',
        textAlign: 'center',
        color: '#fff',
        fontSize: 70,
        fontWeight: '700',
        opacity: 0.7
    }
});